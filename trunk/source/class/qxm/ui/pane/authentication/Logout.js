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
/*  
  //Forces caches to obtain a new copy of the page from the origin server
  response.setHeader("Cache-Control","no-cache");
  //Directs caches not to store the page under any circumstance
  response.setHeader("Cache-Control","no-store");
  //Causes the proxy cache to see the page as "stale"
  response.setDateHeader("Expires", 0);
  //HTTP 1.0 backward compatibility
  response.setHeader("Pragma","no-cache");
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
          var def = qxe.ui.pane.OptionPane.QUEST;
/*          def["buttonPane"] = {
            buttons : {
              OK : qxe.ui.form.ButtonPane.OK,
              CANCEL : qxe.ui.form.ButtonPane.CANCEL
            }
          };
*/
          control = new qxe.ui.pane.OptionPane(this.tr("Are you sure you want to log out?"));
          control.set(def);

          this._add(control);
          break;
      }
      
      return control || this.base(arguments, id);
    }
  }
});
