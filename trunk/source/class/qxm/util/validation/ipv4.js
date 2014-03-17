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
 * This is the validation class of an ipv4 value.
 */
qx.Class.define("qxm.util.validation.ipv4",
{
  statics :
  {
    /**
     * Returns the function that checks for an ipv4 value.
     *
     * @param errorMessage {String?null} Custom error message.
     * @return {Function} The {@link #check} Function.
     */
    ipv4 : function(errorMessage) {
      return function(value) {
        qxm.util.validation.ipv4.check(value, null, errorMessage);
      };
    },

   /**
     * The function checks the incoming value to see if it is a ipv4 value.
     * If not, an ValidationError will be thrown.
     * If you want to use the number check in a property definition,
     * use the {@link #ipv4} method.
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
      var regExpr = /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i;

      if(!regExpr.test(value))
      {
        errorMessage = errorMessage || qx.locale.Manager.tr("%1 is not a valid IP v4 address.", value);
        throw new qx.core.ValidationError("Validation Error", errorMessage);
      }
    }
  }
});
