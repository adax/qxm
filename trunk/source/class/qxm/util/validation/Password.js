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
qx.Class.define("qxm.util.validation.Password",
{
  statics :
  {
    /**
     * Returns the function that checks for a password.
     *
     * @param errorMessage {String?null} Custom error message.
     * @return {Function} The {@link #check} Function.
     */
    password : function(errorMessage) {
      return function(value) {
        qxm.util.validation.password.check(value, null, errorMessage);
      };
    },

   /**
     * The function checks the incoming value to see if it is a valid password.
     * If not, an ValidationError will be thrown.
     * If you want to use the number check in a property definition,
     * use the {@link #password} method.
     *
     * ^                 // start-of-string
     * (?=.*[0-9])       // a digit must occur at least once
     * (?=.*[a-z])       // a lower case letter must occur at least once
     * (?=.*[A-Z])       // an upper case letter must occur at least once
     * (?=.*[@#$%^&+=])  // a special character must occur at least once
     * (?=\S+$)          // no whitespace allowed in the entire string
     * .{8,}             // anything, at least eight places though
     * $                 // end-of-string
     *
     * - not a dictionary word
     * - password strength (maybe a separate widget?)
     *
     * @param value {String} The value to check on the form.
     * @param formItem {qx.ui.form.IForm} The form item to check if used in a
     *   {@link qx.ui.form.Form}.
     * @param errorMessage {String?undefined} Custom error message.
     * @throws {qx.core.ValidationError} If the value parameter is not a
     *    valid password
     */
    check : function(value, formItem, errorMessage)
    {
      var regExpr = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;

      if(!regExpr.test(value))
      {
        errorMessage = errorMessage || qx.locale.Manager.tr("%1 is not a valid password.", value);
        throw new qx.core.ValidationError("Validation Error", errorMessage);
      }
    }
  }
});
