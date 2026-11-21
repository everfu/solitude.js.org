export const COLS = 80;
export const ROWS = 24;

type Line = readonly (readonly [text: string, style: number])[];

export interface Frame {
  at: number;
  lines: readonly Line[];
  top: number;
  status?: string;
}

export function createSession() {
  const frames: Frame[] = [];
  const transcript: Line[] = [];
  const commands = [
    '$ gh repo clone everfu/astro-solitude',
    '$ cd astro-solitude',
    '$ pnpm install',
    '$ pnpm dev',
    'Local: http://localhost:4321/',
  ];
  let at = 0;
  for (const command of commands) {
    for (let i = 1; i <= command.length; i++) {
      frames.push({ at, lines: [...transcript, [[command.slice(0, i), 2]]], top: 0, status: command });
      at += 45;
    }
    transcript.push([[command, 0]], []);
    at += 450;
  }
  return { frames, rest: frames[frames.length - 1] };
}
