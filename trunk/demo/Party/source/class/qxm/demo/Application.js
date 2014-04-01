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
 *
 * @asset(qxm/demo/*)
 *
 */

/**
 * This is the main application class of your custom application "qxm"
 */
qx.Class.define("qxm.demo.Application",
{
  extend : qx.application.Standalone,



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main : function()
    {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }

      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */

      // Create a button
      var fields = [
        qxm.form.PersonForm.PARTYTYPE,
        qxm.form.PersonForm.PARTYID,
        qxm.form.PersonForm.SUPERPARTYIDS,
        qxm.form.PersonForm.TITLE,
        qxm.form.PersonForm.FIRSTNAME,
        qxm.form.PersonForm.MIDDLENAME,
        qxm.form.PersonForm.LASTNAME,
        qxm.form.PersonForm.ALIASNAME
      ];

      var person = new qxm.form.Person(fields);
      var personView = new qxm.form.renderer.PersonRenderer(person);

      var organization = new qxm.form.Organization();
      var organizationView = new qxm.form.renderer.PersonRenderer(organization);

      var party = new qxm.form.Party();
      party.addPartyType(personView);
      party.addPartyType(organizationView);

      // Document is the application root
      var doc = this.getRoot();
			
      // Add button to document at fixed coordinates
      doc.add(party, {left: 10, top: 10});
    }
  }
});
