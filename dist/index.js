'use strict';

/**
 * match media key
 */
var COLOR_SCHEME_MEDIA_KEY = '(prefers-color-scheme: dark)';
/**
 * detect darm mode
 *
 * @author HUANGE
 * @date 2020-12-02
 * @export
 * @class DetectDarkMode
 */
var DetectDarkMode = /** @class */ (function () {
    function DetectDarkMode() {
    }
    Object.defineProperty(DetectDarkMode, "_media", {
        /**
         * get match media query list
         *
         * @readonly
         * @private
         * @static
         */
        get: function () {
            if (typeof window.matchMedia !== 'function') {
                throw new Error('can not detect color scheme');
            }
            return window.matchMedia(COLOR_SCHEME_MEDIA_KEY);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DetectDarkMode, "isDark", {
        /**
         * 是否为暗黑模式
         *
         * @readonly
         * @static
         */
        get: function () {
            if (typeof window.matchMedia !== 'function') {
                throw new Error('can not detect color scheme');
            }
            if (this._isDark === undefined) {
                this._isDark = this._media.matches;
            }
            return this._isDark;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * listen color scheme change
     *
     * @author HUANGE
     * @date 2020-12-02
     * @static
     */
    DetectDarkMode._listenChange = function () {
        var _this = this;
        var media = this._media;
        if (media && typeof media.addEventListener === 'function') {
            var listener_1 = function (ev) {
                _this._isDark = ev.matches;
                _this._onChange(_this._isDark);
            };
            media.addEventListener('change', listener_1);
            return function () {
                media.removeEventListener('change', listener_1);
            };
        }
        return function () { };
    };
    Object.defineProperty(DetectDarkMode, "onChange", {
        /**
         * set color scheme changed call function
         *
         * @static
         */
        set: function (callback) {
            this._onChange = callback;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * color scheme changed call function
     *
     * @private
     * @static
     * @type {ColorSchemeChangeCallback}
     */
    DetectDarkMode._onChange = function (isDarkMode) { };
    return DetectDarkMode;
}());

module.exports = DetectDarkMode;
