// Fixed: Correct CommonJS import for lodash.debounce
import _debounce from 'lodash.debounce';

export type MatchResult = {
  line: string;
  matches: boolean;
  highlighted: string;
};

export type RegexState = {
  pattern: string;
  flags: string;
  error: string | null;
  results: MatchResult[];
  matchedCount: number;
  invert: boolean;
};

// Use the default import
const debounce = _debounce;

export const processRegex = debounce((
  pattern: string,
  flags: string,
  lines: string[],
  invert: boolean,
  callback: (state: RegexState) => void
) => {
  let regex: RegExp;
  let error: string | null = null;
  let results: MatchResult[] = [];
  let matchedCount = 0;

  try {
    regex = new RegExp(pattern || '(?:)', flags);
  } catch (e) {
    error = e instanceof Error ? e.message : 'Invalid regex';
    callback({ pattern, flags, error, results: [], matchedCount: 0, invert });
    return;
  }

  results = lines.map(line => {
    const matches = regex.test(line);
    const highlighted = pattern ? highlightMatches(line, regex) : line;
    if (matches) matchedCount++;
    return { line, matches, highlighted };
  });

  if (invert) {
    results = results.map(r => ({ ...r, matches: !r.matches }));
    matchedCount = results.filter(r => r.matches).length;
  }

  callback({ pattern, flags, error, results, matchedCount, invert });
}, 300);

function highlightMatches(text: string, regex: RegExp): string {
  if (!regex.global) {
    return text.replace(regex, '<mark>$&</mark>');
  }
  return text.replace(regex, match => `<mark>${match}</mark>`);
}