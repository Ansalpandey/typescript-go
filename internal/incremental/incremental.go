package incremental

import (
	"github.com/microsoft/typescript-go/internal/compiler"
	"github.com/microsoft/typescript-go/internal/json"
	"github.com/microsoft/typescript-go/internal/outputpaths"
	"github.com/microsoft/typescript-go/internal/tsoptions"
	"github.com/microsoft/typescript-go/internal/tspath"
)

type BuildInfoReader interface {
	ReadBuildInfo(buildInfoFileName string) *BuildInfo
}

var _ BuildInfoReader = (*buildInfoReader)(nil)

type buildInfoReader struct {
	host compiler.CompilerHost
}

func (r *buildInfoReader) ReadBuildInfo(buildInfoFileName string) *BuildInfo {
	// Read build info file
	data, ok := r.host.FS().ReadFile(buildInfoFileName)
	if !ok {
		return nil
	}
	var buildInfo BuildInfo
	err := json.Unmarshal([]byte(data), &buildInfo)
	if err != nil {
		return nil
	}
	return &buildInfo
}

func NewBuildInfoReader(
	host compiler.CompilerHost,
) BuildInfoReader {
	return &buildInfoReader{host: host}
}

func ReadBuildInfoProgram(config *tsoptions.ParsedCommandLine, reader BuildInfoReader) *Program {
	buildInfoFileName := outputpaths.GetBuildInfoFileName(config.CompilerOptions(), tspath.ComparePathsOptions{
		CurrentDirectory:          config.GetCurrentDirectory(),
		UseCaseSensitiveFileNames: config.UseCaseSensitiveFileNames(),
	})
	if buildInfoFileName == "" {
		return nil
	}

	// Read buildinFo file
	buildInfo := reader.ReadBuildInfo(buildInfoFileName)
	if buildInfo == nil || !buildInfo.IsValidVersion() || !buildInfo.IsIncremental() {
		return nil
	}

	// Convert to information that can be used to create incremental program
	incrementalProgram := &Program{
		snapshot: buildInfoToSnapshot(buildInfo, buildInfoFileName, config),
	}
	return incrementalProgram
}
