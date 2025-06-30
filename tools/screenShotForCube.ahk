Esc::Reload


^W::
CoordMode, Mouse , Screen
__ClickX:=660
__ClickY:=899
__ClickTimes:=1
Click %__ClickX%, %__ClickY%, %__ClickTimes%
Send, <+#s
Sleep % 1000
__ClickX:=50
__ClickY:=291
__ClickTimes:=0
Click %__ClickX%, %__ClickY%, %__ClickTimes%
Send {LButton Down}
__ClickX:=603
__ClickY:=841
__ClickTimes:=0
Click %__ClickX%, %__ClickY%, %__ClickTimes%
Send {LButton UP}
Send {LButton Up}
Return


^Q::
CoordMode, Mouse , Screen
MouseGetPos, 滑鼠座標X, 滑鼠座標Y
Msgbox % "現在滑鼠座標為: " . 滑鼠座標X . ", " . 滑鼠座標Y
Return


