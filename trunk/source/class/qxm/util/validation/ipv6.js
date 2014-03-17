/* ************************************************************************

   qxm - qooxdoo module framework

   Copyright:
     2014 Cost Savers, http://www.cost-savers.net

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Stefan Andersson (sand)

************************************************************************ */

/**
 * This is the validation class of an ipv6 value.
 */
qx.Class.define("qxm.util.validation.ipv6",
{
  statics :
  {
    /**
     * Returns the function that checks for an ipv6 value.
     *
     * @param errorMessage {String?null} Custom error message.
     * @return {Function} The {@link #check} Function.
     */
    ipv6 : function(errorMessage) {
      return function(value) {
        qxm.util.validation.ipv6.check(value, null, errorMessage);
      };
    },

   /**
     * The function checks the incoming value to see if it is an ipv6 value.
     * If not, an ValidationError will be thrown.
     * If you want to use the number check in a property definition,
     * use the {@link #ipv6} method.
     *
     * @param value {String} The value to check on the form.
     * @param formItem {qx.ui.form.IForm} The form item to check if used in a
     *   {@link qx.ui.form.Form}.
     * @param errorMessage {String?undefined} Custom error message.
     * @throws {qx.core.ValidationError} If the value parameter is not a
     *    ipv6 number
     */
    check : function(value, formItem, errorMessage)
    {
      var regExpr = /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i;

      if(!regExpr.test(value))
      {
        errorMessage = errorMessage || qx.locale.Manager.tr("%1 is not a valid IP v6 address.", value);
        throw new qx.core.ValidationError("Validation Error", errorMessage);
      }
    }
  }
});
