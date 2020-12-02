import { ColorSchemeChangeCallback } from './type';

/**
 * match media key
 */
const COLOR_SCHEME_MEDIA_KEY = '(prefers-color-scheme: dark)';

/**
 * detect darm mode
 *
 * @author HUANGE
 * @date 2020-12-02
 * @export
 * @class DetectDarkMode
 */
class DetectDarkMode {
  /**
   * get match media query list
   *
   * @readonly
   * @private
   * @static
   */
  private static get _media() {
    if (typeof window.matchMedia !== 'function') {
      throw new Error('can not detect color scheme');
    }
    return window.matchMedia(COLOR_SCHEME_MEDIA_KEY);
  }

  /**
   * 是否为暗黑模式
   *
   * @private
   * @static
   * @type {boolean}
   */
  private static _isDark: boolean;
  /**
   * 是否为暗黑模式
   *
   * @readonly
   * @static
   */
  public static get isDark() {
    if (typeof window.matchMedia !== 'function') {
      throw new Error('can not detect color scheme');
    }
    if (this._isDark === undefined) {
      this._isDark = this._media.matches;
    }
    return this._isDark;
  }

  /**
   * listen color scheme change
   *
   * @author HUANGE
   * @date 2020-12-02
   * @static
   */
  public static _listenChange() {
    const media = this._media;
    if (media && typeof media.addEventListener === 'function') {
      const listener = (ev: MediaQueryListEvent) => {
        this._isDark = ev.matches;
        this._onChange(this._isDark);
      };
      media.addEventListener('change', listener);
      return () => {
        media.removeEventListener('change', listener);
      };
    }
    return () => {};
  }

  /**
   * color scheme changed call function
   *
   * @private
   * @static
   * @type {ColorSchemeChangeCallback}
   */
  private static _onChange: ColorSchemeChangeCallback = (
    isDarkMode: boolean
  ) => {};
  /**
   * set color scheme changed call function
   *
   * @static
   */
  public static set onChange(callback: ColorSchemeChangeCallback) {
    this._onChange = callback;
  }
}

export default DetectDarkMode;
