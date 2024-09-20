import { rgb } from '../utils';
import { RgbString } from '../types';

export type ToolInfo = {
  name: string;
  color: RgbString;
};

export function isToolInfo(value: any): value is ToolInfo {
  return value !== null
      && typeof value === 'object'
      && typeof value.name === 'string'
      && typeof value.color === 'string';
}

const newToolInfo = (name: string, r: number, g: number, b: number): ToolInfo => ({ name, color: rgb(r, g, b) });

export const enum ToolName {
  AZURE_SDK = 'AZURE_SDK',
  ASP_DOT_NET_CORE = 'ASP_DOT_NET_CORE',
  BASH = 'BASH',
  BLAZOR = 'BLAZOR',
  C = 'C',
  C_SHARP = 'C_SHARP',
  CSS = 'CSS',
  CPP = 'CPP',
  DOT_NET = 'DOT_NET',
  DOT_NET_MAUI = 'DOT_NET_MAUI',
  HTML = 'HTML',
  JAVA = 'JAVA',
  JAVAFX = 'JAVA_FX',
  JAVASCRIPT = 'JAVASCRIPT',
  JSON = 'JSON',
  MUDBLAZOR = 'MUDBLAZOR',
  FIGMA = 'FIGMA',
  POWERSHELL = 'POWERSHELL',
  PYTHON = 'PYTHON',
  REACT = 'REACT',
  SCENE_BUILDER = 'SCENE_BUILDER',
  TYPESCRIPT = 'TYPESCRIPT',
  WIRING_PI = 'WIRING_PI',
}

// Colors sourced from https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml

export const ToolInfoMap: Record<ToolName, ToolInfo> = {
  [ToolName.ASP_DOT_NET_CORE]: newToolInfo('ASP.NET Core', 81, 43, 212),
  [ToolName.C]: newToolInfo('C', 85, 85, 85),
  [ToolName.C_SHARP]: newToolInfo('C#', 23, 134, 0),
  [ToolName.CPP]: newToolInfo('C++', 243, 75, 125),
  [ToolName.DOT_NET]: newToolInfo('.NET', 81, 43, 212),
  [ToolName.DOT_NET_MAUI]: newToolInfo('.NET MAUI', 134, 97, 197),
  [ToolName.BLAZOR]: newToolInfo('Blazor', 92, 45, 145),
  [ToolName.MUDBLAZOR]: newToolInfo('MudBlazor', 126, 111, 255),
  [ToolName.JAVA]: newToolInfo('Java', 176, 114, 25),
  [ToolName.JAVAFX]: newToolInfo('JavaFX', 82, 211, 170),
  [ToolName.JSON]: newToolInfo('JSON', 70, 70, 70),
  [ToolName.SCENE_BUILDER]: newToolInfo('Scene Builder', 252, 178, 21),
  [ToolName.JAVASCRIPT]: newToolInfo('JavaScript', 222, 208, 84),
  [ToolName.TYPESCRIPT]: newToolInfo('TypeScript', 43, 116, 137),
  [ToolName.POWERSHELL]: newToolInfo('PowerShell', 70, 132, 233),
  [ToolName.BASH]: newToolInfo('Bash', 137, 224, 81),
  [ToolName.WIRING_PI]: newToolInfo('WiringPi', 188, 17, 66),
  [ToolName.HTML]: newToolInfo('HTML', 228, 75, 35),
  [ToolName.CSS]: newToolInfo('CSS', 86, 61, 124),
  [ToolName.PYTHON]: newToolInfo('Python', 53, 114, 165),
  [ToolName.REACT]: newToolInfo('React', 88, 195, 224),
  [ToolName.AZURE_SDK]: newToolInfo('Azure SDK', 0, 137, 214),
  [ToolName.FIGMA]: newToolInfo('Figma', 162, 89, 255),
} as const;
