import Handlebars from 'handlebars';
import { inlineSVG } from '../src';

// Arrange & Act
Handlebars.registerHelper('inlineSVG', inlineSVG);

describe('inlineSVG Helper', () => {
    it('should be able to be registered as a handlebars helper', () => {
        // Assert
        expect(Handlebars.helpers.inlineSVG).toBeTruthy();
    });

    describe('Throws an error', () => {
        it('if the path parameter specified isn’t a string', () => {
            // Arrange & Act
            const template = Handlebars.compile('{{ inlineSVG }}');

            // Assert
            expect(template).toThrowError('{{inlineSVG}} helper: invalid path. Path must be formatted as a string.');
        });

        it('If the path cannot be found', () => {
            // Arrange & Act
            const template = Handlebars.compile('{{ inlineSVG "test.svg" }}');

            // Assert
            expect(template).toThrow();
        });

        it('If the file found is not in SVG format', () => {
            // Arrange & Act
            const template = Handlebars.compile('{{ inlineSVG "./img/test-fail.svg" }}');

            // Assert
            expect(template).toThrowError('{{inlineSVG}} helper: File specified must be an SVG');
        });
    });


    describe('SVG Output', () => {
        it('is correct if inlining a standard SVG from a path', () => {
            // Arrange & Act
            const template = Handlebars.compile('{{ inlineSVG "./img/test.svg"}}');

            // Assert
            expect(template()).toEqual('<svg viewBox="0 0 10 6"><path d="M5 4.41L9.29.12a.42.42 0 0 1 .59.6L5.29 5.28a.42.42 0 0 1-.58 0L.12.71a.42.42 0 0 1 .6-.59L5 4.42z" fill="#333" fill-rule="nonzero"/></svg>');
        });

        it('adds associated attributes if passed through as options', () => {
            // Arrange & Act
            const template = Handlebars.compile('{{ inlineSVG "./img/test.svg" class="myClass" width="10" }}');

            // Assert
            expect(template()).toEqual('<svg viewBox="0 0 10 6" width="10" class="myClass"><path d="M5 4.41L9.29.12a.42.42 0 0 1 .59.6L5.29 5.28a.42.42 0 0 1-.58 0L.12.71a.42.42 0 0 1 .6-.59L5 4.42z" fill="#333" fill-rule="nonzero"/></svg>');
        });

        it('can import an SVG from an external icon framework, defined from it’s own package', () => {
            // Arrange & Act
            const template = Handlebars.compile('{{ inlineSVG "@justeat/f-icons/src/img/icons/arrows/chevron.svg" }}');

            // Assert
            expect(template()).toEqual('<svg width="10" height="6" viewBox="0 0 10 6"><path d="M5 4.41L9.29.12a.42.42 0 0 1 .59.6L5.29 5.28a.42.42 0 0 1-.58 0L.12.71a.42.42 0 0 1 .6-.59L5 4.42z" fill="#333" fill-rule="nonzero"/></svg>');
        });
    });
});
