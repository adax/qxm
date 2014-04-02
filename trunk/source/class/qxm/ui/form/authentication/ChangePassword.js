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
 *
 * @asset(qx/icon/${qx.icontheme}/32/actions/help-about.png)
 * @asset(qxm/ui/form/authentication/login.png)
 *
 * @asset(qxm/ui/form/authentication/login.png)
 *
 */

/**
 * - no empty fields are allowed
 * - email address has to be in the format name@domain
 * - date has to be in the format dd.mm.yyyy
 * - to compare passwords
 * - characters of password
 */
qx.Class.define("qxm.ui.form.authentication.ChangePassword",
{
  extend : qx.ui.form.Form,
  include : [
    qxe.ui.form.MFormItemControl
  ],


  /*
   *****************************************************************************
      CONSTRUCTOR
   *****************************************************************************
   */

  construct : function()
  {
    this.base(arguments);

    this._create("username");
    this._create("old-password");
    this._create("new-password");
    this._create("retype-password");
    this._create("button-pane");

    var controller = this.__controller = new qx.data.controller.Form(null, this);
    var model = controller.createModel();
  },


  /*
   *****************************************************************************
      EVENTS
   *****************************************************************************
   */

  events :
  {
	/** Event fired when password data changed. */
    "passwordChanged" : "qx.event.type.Data"
  },


  /*
   *****************************************************************************
      PROPERTIES
   *****************************************************************************
   */

  properties :
  {
  },


  /*
   *****************************************************************************
      MEMBERS
   *****************************************************************************
   */

  members :
  {
	__controller : null,

    // Overridden
    _createImpl : function(id, hash)
    {
      var tooltip;
      var control = null;

      switch(id)
      {
        case "username":
          tooltip = new qx.ui.tooltip.ToolTip(this.tr("Your username."), "icon/32/actions/help-about.png");

          control = new qx.ui.form.TextField();
          control.setRequired(true);
          control.setToolTip(tooltip);
          control.setPlaceholder(this.tr("Username"));
//          control.addListener("input", this._onInput, this);
          // Sometimes they want a username the same as an e-mail address
          // /[a-zA-Z0-9_.-@]/
//          control.setFilter(nameExpr);

          this.add(control, "Username", null, "username");
          break;

        case "old-password":
          tooltip = new qx.ui.tooltip.ToolTip(this.tr("Your old password."), "icon/32/actions/help-about.png");

          control = new qx.ui.form.PasswordField();
          control.setRequired(true);
          control.setToolTip(tooltip);
          control.setPlaceholder(this.tr("Old password"));
//          control.addListener("input", this._onInput, this);

          this.add(control, "Old password", null, "oldPassword");
          break;

        case "new-password":
          tooltip = new qx.ui.tooltip.ToolTip(this.tr("Your new password."), "icon/32/actions/help-about.png");

          control = new qx.ui.form.PasswordField();
          control.setRequired(true);
          control.setToolTip(tooltip);
          control.setPlaceholder(this.tr("New password"));
//          control.addListener("input", this._onInput, this);

          this.add(control, "New password", null, "newPassword");
          break;

        case "retype-password":
            tooltip = new qx.ui.tooltip.ToolTip(this.tr("Retype your new password."), "icon/32/actions/help-about.png");

            control = new qx.ui.form.PasswordField();
            control.setRequired(true);
            control.setToolTip(tooltip);
            control.setPlaceholder(this.tr("Retype new password"));
//            control.addListener("input", this._onInput, this);

            this.add(control, "Retype new password", null, "retypePassword");
            break;

        case "button-pane":
          control = new qxe.ui.form.ButtonPane();

          // Button pane buttons
          var loginDef = {
            label : "Change",
            icon : "qxm/ui/form/authentication/login.png",
            toolTipText : this.tr("Click the button to change the password.")
          };

          var loginB = new qx.ui.form.Button();
          loginB.set(loginDef);
          loginB.addListener("execute", this._login, this);

          control.add(loginB, "affirmative");

          var cancelB = new qx.ui.form.Button();
          cancelB.set(qxe.ui.form.ButtonPane.CANCEL);
          cancelB.setToolTipText(this.tr("Cancel change."));
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
    },


    _cancel : function()
    {
    },

    _help : function()
    {
    },

    _login : function(e)
    {
      // Check password
//      qxm.util.validation.Password()
      // Check new and retyped new password

      if (this.validate())
      {
        var model = this.__controller.getModel();
        var loginData = {
          username : model.getUsername(),
          old_password : model.getOldPassword(),
          new_password : model.getNewPassword(),
          retype_password : model.getRetypePassword()
        };

        this.fireDataEvent("passwordChanged", loginData);
      }
    }
  },


  /*
   *****************************************************************************
      DESTRUCTOR
   *****************************************************************************
   */

  destruct : function()
  {
    this._disposeObjects("__controller");
  }
});
