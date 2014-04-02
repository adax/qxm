/* ************************************************************************

   qxm - qooxdoo extension framework

   Copyright:
     2010-2014 Cost Savers, http://www.cost-savers.net

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Stefan Andersson (sand)

************************************************************************ */

/**
 * A log out option pane.
 */
qx.Class.define("qxm.ui.pane.authentication.Logout",
{
  extend : qxe.ui.pane.OptionPane,
/*
  include : [
    qxe.ui.form.MFormItemControl
  ],
*/

  /*
   *****************************************************************************
      CONSTRUCTOR
   *****************************************************************************
   */

  construct : function()
  {
    this.base(arguments);

    this._createChildControl("logout-pane");
  },


  /*
   *****************************************************************************
      MEMBERS
   *****************************************************************************
   */

  members :
  {
    // Overridden
    _createChildControlImpl : function(id, hash)
    {
      var control;

      switch(id)
      {
        case "logout-pane":
          control = new qxe.ui.pane.OptionPane(this.tr("Are you sure you want to log out?"));
          control.set(qxe.ui.pane.OptionPane.QUEST);

          this._add(control);
          break;
      }
      
      return control || this.base(arguments, id);
    }
  }
});
