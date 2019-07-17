/*
Description: to make active inactive control of any html input control
@Date: 06 April, 2010
@Author: rohit.dubariya@gmail.com, vishalparmarn@gmail.com
@Licence: Under GPL: you can Reuse,Redescribute, Modify  this function by keeping copyright
*/

function changestatus(object, status, text)
{
	if(object.type == 'text') // for input type text
	{
		if(status == 'inactive')
		{
			if(object.value=="")	
			{
				object.setAttribute("class", "inputText inpEffects inactivetext");								
			}
			else
			{
				object.setAttribute("class", "inputText inpEffects activatedtext ");
			}
			
		}
		else
		{
			object.value = "";
			object.setAttribute("class", "inputText inpEffects activatedtext ");						
		}
		
		
	}
	else if(object.type == 'password') // for input type text
	{
		if(status == 'inactive')
		{
			if(object.value=="")	
			{
				object.setAttribute("class", "inputText inpEffects inactivetext");								
			}
			else
			{
				object.setAttribute("class", "inputText inpEffects activatedtext ");
			}
			
		}
		else
		{
			object.value = "";
			object.setAttribute("class", "inputText inpEffects activatedtext ");						
		}
		
		
	}
	else if(object.type == 'textarea') // for input type textarea
	{
			if(status == 'inactive')
		{
			if(object.value=="")	
			{
				object.setAttribute("class", "textarea inpEffects inactivetext");								
			}
			else
			{
				object.setAttribute("class", "textarea inpEffects activatedtext ");
			}
			
		}
		else
		{
			object.value = "";
			object.setAttribute("class", "textarea inpEffects activatedtext ");						
		}
	}
	if (! object.value) { object.value=text; }						
}
