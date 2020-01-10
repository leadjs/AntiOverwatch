function rageCheck()
{
    var n = "\n"
    var value = UI.GetValue( "Rage", "GENERAL", "General", "Enabled" );
    var checked = UI.GetValue( "MISC", "JAVASCRIPT", "Script Items", "Force rage off" );
    if (value=="1") {
        if (checked==true){
            UI.SetValue( "Rage", "GENERAL", "General", "Enabled", false );
            Global.PrintChat("You can not play with ragebot enabled!" + n);
            Global.PrintColor( [ 255, 50, 0, 255 ], "ERROR: YOU HAVE ANTI-OVERWATCH (RAGE) ENABLED!" + n);
        }

    }
    var legit = UI.GetValue( "Legit", "GENERAL", "General", "Enabled" );
    var checked2 = UI.GetValue( "MISC", "JAVASCRIPT", "Script Items", "Force legit off" );
    if (legit=="1") {
        if (checked2==true){
            UI.SetValue( "Legit", "GENERAL", "General", "Enabled", false );
            Global.PrintChat("You can not play with legitbot enabled!" + n);
            Global.PrintColor( [ 255, 50, 0, 255 ], "ERROR: YOU HAVE ANTI-OVERWATCH (LEGIT) ENABLED!" + n);
        }

    }
}

Global.RegisterCallback("Draw", "rageCheck");
UI.AddCheckbox("Force legit off");
UI.AddCheckbox("Force rage off");
UI.SetValue("RAGE", "GENERAL", "Enabled", false);
UI.SetValue("MISC", "JAVASCRIPT", "Script Items", "Disable Rage (Anti-OW)", true);
UI.SetValue("MISC", "JAVASCRIPT", "Script Items", "Disable Legit (Anti-OW)", true);



