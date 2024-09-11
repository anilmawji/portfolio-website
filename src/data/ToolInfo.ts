import { rgb } from '../utils';
import { ToolInfo } from '../types';

const newToolInfo = (name: string, r: number, g: number, b: number): ToolInfo => ({ name, color: rgb(r, g, b) });

enum ToolName {
  C = 'C',
  C_SHARP = 'C_SHARP',
  CPP = 'CPP',
  DOT_NET = 'DOT_NET',
  DOT_NET_MAUI = 'DOT_NET_MAUI',
  BLAZOR = 'BLAZOR',
  MUDBLAZOR = 'MUDBLAZOR',
  JAVA = 'JAVA',
  JAVAFX = 'JAVA_FX',
  JAVASCRIPT = 'JAVASCRIPT',
  TYPESCRIPT = 'TYPESCRIPT',
  POWERSHELL = 'POWERSHELL',
  SHELL = 'SHELL',
  WIRING_PI = 'WIRING_PI',
  HTML = 'HTML',
  CSS = 'CSS',
  PYTHON = 'PYTHON',
  REACT = 'REACT'
}

// Colors sourced from https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml

const ToolInfoMap: Record<ToolName, ToolInfo> = {
  [ToolName.C]: newToolInfo('C', 85, 85, 85),
  [ToolName.C_SHARP]: newToolInfo('C#', 23, 134, 0),
  [ToolName.CPP]: newToolInfo('C++', 243, 75, 125),
  [ToolName.DOT_NET]: newToolInfo('.NET', 81, 43, 212),
  [ToolName.DOT_NET_MAUI]: newToolInfo('.NET MAUI', 134, 97, 197),
  [ToolName.BLAZOR]: newToolInfo('Blazor', 92, 45, 145),
  [ToolName.MUDBLAZOR]: newToolInfo('MudBlazor', 126, 111, 255),
  [ToolName.JAVA]: newToolInfo('Java', 176, 114, 25),
  [ToolName.JAVAFX]: newToolInfo('JavaFX', 82, 211, 170),
  [ToolName.JAVASCRIPT]: newToolInfo('JavaScript', 222, 208, 84),
  [ToolName.TYPESCRIPT]: newToolInfo('TypeScript', 43, 116, 137),
  [ToolName.POWERSHELL]: newToolInfo('PowerShell', 1, 36, 86),
  [ToolName.SHELL]: newToolInfo('Shell', 137, 224, 81),
  [ToolName.WIRING_PI]: newToolInfo('WiringPi', 188, 17, 66),
  [ToolName.HTML]: newToolInfo('HTML', 228, 75, 35),
  [ToolName.CSS]: newToolInfo('CSS', 86, 61, 124),
  [ToolName.PYTHON]: newToolInfo('Python', 53, 114, 165),
  [ToolName.REACT]: newToolInfo('React', 88, 195, 224)
} as const;

export { ToolInfoMap };
