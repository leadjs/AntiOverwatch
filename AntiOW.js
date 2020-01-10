var n = "\n"
function rageCheck()
{
    var value = UI.GetValue( "Rage", "GENERAL", "General", "Enabled" );
    var checked = UI.GetValue( "MISC", "JAVASCRIPT", "Script Items", "Disable Rage (Anti-OW)" );
    if (value=="0") {}
    if (value=="1") {
        if (checked==true){
            UI.SetValue( "Rage", "GENERAL", "General", "Enabled", false );
            Global.PrintChat("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-" + n);
            Global.PrintChat("ERROR: YOU HAVE ANTI-OVERWATCH ENABLED!" + n);
            Global.PrintChat("Disable in MISC > JAVASCRIPT > SCRIPT ITEMS > Disable Rage" + n);
            Global.PrintChat("Disabling this gives out a risk of overwatch conviction" + n);
            Global.PrintChat("This will NOT prevent VAC bans if cheat is detected" + n);
            Global.PrintChat(" " + n);
            Global.PrintChat("Script made by NativePurps @ Onetap Forums" + n);
            Global.PrintChat("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-" + n);
            Global.PrintColor( [ 255, 50, 0, 255 ], "ERROR: YOU HAVE ANTI-OVERWATCH (RAGE) ENABLED!" + n);
        }
        if (checked==false) {}

    }
    var legit = UI.GetValue( "Legit", "GENERAL", "General", "Enabled" );
    var checked2 = UI.GetValue( "MISC", "JAVASCRIPT", "Script Items", "Disable Legit (Anti-OW)" );
    if (legit=="0") {}
    if (legit=="1") {
        if (checked2==true){
            UI.SetValue( "Legit", "GENERAL", "General", "Enabled", false );
            Global.PrintChat("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-" + n);
            Global.PrintChat("ERROR: YOU HAVE ANTI-OVERWATCH ENABLED!" + n);
            Global.PrintChat("Disable in MISC > JAVASCRIPT > SCRIPT ITEMS > Disable Legit)" + n);
            Global.PrintChat("Disabling this gives out a risk of overwatch conviction" + n);
            Global.PrintChat("This will NOT prevent VAC bans if cheat is detected" + n);
            Global.PrintChat(" " + n);
            Global.PrintChat("Script made by NativePurps @ Onetap Forums" + n);
            Global.PrintChat("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-" + n);
            Global.PrintColor( [ 255, 50, 0, 255 ], "ERROR: YOU HAVE ANTI-OVERWATCH (LEGIT) ENABLED!" + n);
        }
        if (checked2==false) {}

    }
}

Global.RegisterCallback("Draw", "rageCheck");
UI.AddCheckbox("Disable Rage (Anti-OW)");
UI.AddCheckbox("Disable Legit (Anti-OW)");
UI.SetValue("RAGE", "GENERAL", "Enabled", false);
UI.SetValue("MISC", "JAVASCRIPT", "Script Items", "Disable Rage (Anti-OW)", true);
UI.SetValue("MISC", "JAVASCRIPT", "Script Items", "Disable Legit (Anti-OW)", true);



