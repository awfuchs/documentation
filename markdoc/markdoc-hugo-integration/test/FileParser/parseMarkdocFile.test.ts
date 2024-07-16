import { describe, test, expect } from 'vitest';
import { FileParser } from '../../src/FileParser';
import { findInDir } from '../../src/helpers/filesystem';
import { VALID_CONTENT_DIR, VALID_PARTIALS_DIR, SNAPSHOTS_DIR } from '../constants';

describe('parseMarkdocFile processes valid input', () => {
  const markdocFiles = findInDir(VALID_CONTENT_DIR, /\.mdoc$/);

  markdocFiles.forEach((markdocFile) => {
    const sanitizedMarkdocFilename = markdocFile.replace(VALID_CONTENT_DIR, '');
    const { ast, frontmatter, partials, errorReports } = FileParser.parseMdocFile(
      markdocFile,
      VALID_PARTIALS_DIR
    );

    test(`it creates an AST for ${sanitizedMarkdocFilename}`, () => {
      expect(ast).toBeDefined();
      expect(JSON.stringify(ast, null, 2)).toMatchFileSnapshot(
        `${SNAPSHOTS_DIR}/compilationByFilename/valid/${sanitizedMarkdocFilename}/ast.json`
      );
    });

    test(`it creates frontmatter for ${sanitizedMarkdocFilename}`, () => {
      expect(frontmatter).toBeDefined();
      expect(JSON.stringify(frontmatter, null, 2)).toMatchFileSnapshot(
        `${SNAPSHOTS_DIR}/compilationByFilename/valid/${sanitizedMarkdocFilename}/frontmatter.json`
      );
    });

    test(`it creates partials for ${sanitizedMarkdocFilename}`, () => {
      expect(partials).toBeDefined();
      expect(JSON.stringify(partials, null, 2)).toMatchFileSnapshot(
        `${SNAPSHOTS_DIR}/compilationByFilename/valid/${sanitizedMarkdocFilename}/partials.json`
      );
    });

    test(`it does not encounter any errors for ${sanitizedMarkdocFilename}`, () => {
      expect(errorReports).toBeDefined();
      expect(errorReports.length).toEqual(0);
    });
  });
});
