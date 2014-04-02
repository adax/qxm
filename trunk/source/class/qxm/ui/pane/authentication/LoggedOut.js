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
 * A logged out message.
 */
qx.Class.define("qxm.ui.form.authentication.LoggedOut",
{
  extend : qx.ui.core.Widget,


  /*
   *****************************************************************************
      CONSTRUCTOR
   *****************************************************************************
   */

  construct : function()
  {
    this.base(arguments);

    this._createChildControl("label");
    this._createChildControl("button-pane");
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
        case "label":
          control = new qx.ui.basic.Label(this.tr("Are you sure you want to log out?"));

          this.add(control, null, null, "message");
          break;

        case "button-pane":
          control = new qxe.ui.form.ButtonPane();

          // Button pane buttons
          var okB = new qx.ui.form.Button();
          okB.set(qxe.ui.form.ButtonPane.OK);
          okB.setToolTipText(this.tr("Logout."));
          okB.addListener("execute", this._ok, this);

          control.add(okB, "affirmative");

          var cancelB = new qx.ui.form.Button();
          cancelB.set(qxe.ui.form.ButtonPane.CANCEL);
          cancelB.setToolTipText(this.tr("Cancel logout."));
          cancelB.addListener("execute", this._cancel, this);

          control.add(cancelB, "cancel");

          var helpB = new qx.ui.form.Button();
          helpB.set(qxe.ui.form.ButtonPane.HELP);
          helpB.setToolTipText(this.tr("Get help."));
          helpB.addListener("execute", this._help, this);

          control.add(helpB, "help");

          this.addButton(control);
          break;
      }
      
      return control;
    }
  },


  /*
   *****************************************************************************
      DESTRUCTOR
   *****************************************************************************
   */

  destruct : function()
  {
//		this._disposeObjects();
  }
});
