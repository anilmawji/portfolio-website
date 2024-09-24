import { rgb, RgbString } from '../utils';

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
  AZURE = 'AZURE',
  ASP_DOT_NET_CORE = 'ASP_DOT_NET_CORE',
  BASH = 'BASH',
  BLAZOR = 'BLAZOR',
  C = 'C',
  C_SHARP = 'C_SHARP',
  CSS = 'CSS',
  CPP = 'CPP',
  DATA_FACTORY = 'DATA_FACTORY',
  DOCKER = 'DOCKER',
  DOT_NET = 'DOT_NET',
  DOT_NET_MAUI = 'DOT_NET_MAUI',
  GIT = 'GIT',
  HTML = 'HTML',
  HELM = 'HELM',
  JAVA = 'JAVA',
  JAVA_FX = 'JAVA_FX',
  JAVASCRIPT = 'JAVASCRIPT',
  JIRA = 'JIRA',
  JSON = 'JSON',
  JUPYTER = 'JUPYTER',
  KUBERNETES = 'KUBERNETES',
  LINUX = 'LINUX',
  LIGHTSPEED = 'LIGHTSPEED',
  MANAGEENGINE = 'MANAGEENGINE',
  MUDBLAZOR = 'MUDBLAZOR',
  MICROSOFT_DEFENDER = 'MICROSOFT_DEFENDER',
  MONERIS = 'MONERIS',
  OKTA = 'OKTA',
  FIGMA = 'FIGMA',
  POWERSHELL = 'POWERSHELL',
  PULUMI = 'PULUMI',
  PYTHON = 'PYTHON',
  REACT = 'REACT',
  SCENE_BUILDER = 'SCENE_BUILDER',
  TYPESCRIPT = 'TYPESCRIPT',
  WIRING_PI = 'WIRING_PI'
}

// Colors partially sourced from https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml

export const ToolInfoMap: Record<ToolName, ToolInfo> = {
  [ToolName.ASP_DOT_NET_CORE]: newToolInfo('ASP.NET Core', 81, 43, 212),
  [ToolName.C]: newToolInfo('C', 85, 85, 85),
  [ToolName.C_SHARP]: newToolInfo('C#', 23, 134, 0),
  [ToolName.CPP]: newToolInfo('C++', 243, 75, 125),
  [ToolName.DATA_FACTORY]: newToolInfo('Data Factory', 89, 180, 217),
  [ToolName.DOCKER]: newToolInfo('Docker', 9, 109, 215),
  [ToolName.DOT_NET]: newToolInfo('.NET', 81, 43, 212),
  [ToolName.DOT_NET_MAUI]: newToolInfo('.NET MAUI', 134, 97, 197),
  [ToolName.GIT]: newToolInfo('Git', 240, 80, 51),
  [ToolName.BLAZOR]: newToolInfo('Blazor', 92, 45, 145),
  [ToolName.MANAGEENGINE]: newToolInfo('ManageEngine', 128, 191, 69),
  [ToolName.MUDBLAZOR]: newToolInfo('MudBlazor', 126, 111, 255),
  [ToolName.MICROSOFT_DEFENDER]: newToolInfo('Microsoft Defender', 1, 119, 215),
  [ToolName.MONERIS]: newToolInfo('Moneris', 0, 103, 127),
  [ToolName.JAVA]: newToolInfo('Java', 176, 114, 25),
  [ToolName.JAVA_FX]: newToolInfo('JavaFX', 82, 211, 170),
  [ToolName.JSON]: newToolInfo('JSON', 70, 70, 70),
  [ToolName.JIRA]: newToolInfo('Jira', 24, 104, 219),
  [ToolName.LIGHTSPEED]: newToolInfo('Lightspeed', 238, 81, 82),
  [ToolName.HELM]: newToolInfo('Helm', 15, 32, 137),
  [ToolName.SCENE_BUILDER]: newToolInfo('Scene Builder', 252, 178, 21),
  [ToolName.JAVASCRIPT]: newToolInfo('JavaScript', 222, 208, 84),
  [ToolName.JUPYTER]: newToolInfo('Jupyter', 243, 119, 38),
  [ToolName.KUBERNETES]: newToolInfo('Kubernetes', 50, 108, 229),
  [ToolName.TYPESCRIPT]: newToolInfo('TypeScript', 43, 116, 137),
  [ToolName.POWERSHELL]: newToolInfo('PowerShell', 70, 132, 233),
  [ToolName.BASH]: newToolInfo('Bash', 77, 168, 37),
  [ToolName.OKTA]: newToolInfo('Okta', 0, 125, 193),
  [ToolName.WIRING_PI]: newToolInfo('WiringPi', 188, 17, 66),
  [ToolName.HTML]: newToolInfo('HTML', 228, 75, 35),
  [ToolName.CSS]: newToolInfo('CSS', 86, 61, 124),
  [ToolName.PYTHON]: newToolInfo('Python', 255, 205, 59),
  [ToolName.PULUMI]: newToolInfo('Pulumi', 242, 110, 126),
  [ToolName.REACT]: newToolInfo('React', 88, 195, 224),
  [ToolName.AZURE]: newToolInfo('Azure', 0, 137, 214),
  [ToolName.FIGMA]: newToolInfo('Figma', 162, 89, 255),
  [ToolName.LINUX]: newToolInfo('Linux', 161, 55, 106),
} as const;
