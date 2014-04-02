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
 * A logged out option pane.
 */
qx.Class.define("qxm.ui.pane.authentication.LoggedOut",
{
  extend : qxe.ui.pane.OptionPane,


  /*
   *****************************************************************************
      CONSTRUCTOR
   *****************************************************************************
   */

  construct : function()
  {
    this.base(arguments);

    this._createChildControl("pane");
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
        case "pane":
          control = new qxe.ui.pane.OptionPane(this.tr("You are now logged out."));
          control.set(qxe.ui.pane.OptionPane.INFO);

          this._add(control);
          break;
      }
      
      return control || this.base(arguments, id);
    }
  }
});
