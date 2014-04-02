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
 * A lost login form to recover the password.
 */
qx.Class.define("qxm.ui.form.authentication.RecoverPassword",
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
    this._create("password");
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
	/** Event fired when login data recovered. */
    "passwordRecovered" : "qx.event.type.Data"
  },


  /*
   *****************************************************************************
      PROPERTIES
   *****************************************************************************
   */

  properties :
  {
    /**
     * Set the two-factor authentication.
     */
    showCaptcha :
    {
      check : "Boolean",
      nullable : false,
      apply : "_applyShowCaptcha",
      themeable : true
    },

    /**
     * Set the two-factor authentication.
     */
    showTwoFactor :
    {
      check : "Boolean",
      init : false,
      apply : "_applyShowTwoFactor",
      themeable : true
    }
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
        case "email":
          tooltip = new qx.ui.tooltip.ToolTip(this.tr("Your username."), "icon/32/actions/help-about.png");

          control = new qx.ui.form.TextField();
          control.setRequired(true);
          control.setToolTip(tooltip);
          control.setPlaceholder(this.tr("Username"));
//         control.addListener("input", this._onInput, this);
          // Sometimes they want a username the same as an e-mail address
          // /[a-zA-Z0-9_.-@]/
//         control.setFilter(nameExpr);

          this.add(control, "Username", null, "username");
          break;

        case "username":
          tooltip = new qx.ui.tooltip.ToolTip(this.tr("Your username."), "icon/32/actions/help-about.png");

          control = new qx.ui.form.TextField();
          control.setRequired(true);
          control.setToolTip(tooltip);
          control.setPlaceholder(this.tr("Username"));
//         control.addListener("input", this._onInput, this);
          // Sometimes they want a username the same as an e-mail address
          // /[a-zA-Z0-9_.-@]/
//         control.setFilter(nameExpr);

          this.add(control, "Username", null, "username");
          break;

        case "passphrase":
          tooltip = new qx.ui.tooltip.ToolTip(this.tr("Your passphrase."), "icon/32/actions/help-about.png");

          control = new qx.ui.form.PasswordField();
          control.setRequired(true);
          control.setToolTip(tooltip);
          control.setPlaceholder(this.tr("Password"));
//         control.addListener("input", this._onInput, this);

          this.add(control, "Password", null, "password");
          break;

        case "two-factor":
          tooltip = new qx.ui.tooltip.ToolTip(this.tr("Here you type in the two factor authentication code sent to you by sms."), "icon/32/actions/help-about.png");

          control = new qx.ui.form.PasswordField();
          control.setRequired(true);
          control.setToolTip(tooltip);
          control.setPlaceholder(this.tr("Two-factor code"));
//          control.addListener("input", this._onInput, this);

          this.add(control, "Code", null, "code");
          break;

        case "captcha":
          if(this.getShowCaptcha())
          {
//            gb = new qx.ui.groupbox.GroupBox(this.tr("Captcha"));
//            gb.setMargin(5);

            control = new qxe.ui.control.Captcha();
            control.addListener("load", this._getCaptcha, this);

            this.add(control, "Captcha", null, "captcha");
          }
          break;

        case "button-pane":
          control = new qxe.ui.form.ButtonPane();

          // Button pane buttons
          var loginDef = {
            label : "Login",
            icon : "qxm/ui/form/authentication/login.png",
            toolTipText : this.tr("Click the button to login.")
          };

          var loginB = new qx.ui.form.Button();
          loginB.set(loginDef);
          loginB.addListener("execute", this._login, this);

          control.add(loginB, "affirmative");

          var cancelB = new qx.ui.form.Button();
          cancelB.set(qxe.ui.form.ButtonPane.CANCEL);
          cancelB.setToolTipText(this.tr("Cancel login."));
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
