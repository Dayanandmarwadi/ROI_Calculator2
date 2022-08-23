function ROI(){
    
    var Number_of_techs = parseFloat(document.getElementById("Number_of_techs").value);

    var Number_of_back_office_staff= parseFloat(document.getElementById("Number_of_back_office_staff").value);
    
    var Average_Ticket_size= parseFloat(document.getElementById("Average_Ticket_size").value);
    
    var Average_Number_of_calls_per_day = parseFloat(document.getElementById("Average_Number_of_calls_per_day").value);
    
    var Percentage_of_calls_which_are_booked= parseFloat(document.getElementById("Percentage_of_calls_which_are_booked").value); 
    
    //var Percentage_of_calls_which_turn_into_solid_estimates = parseFloat(document.getElementById("Percentage_of_calls_which_turn_into_solid_estimates").value);

    //var Transaction_fee_saved_per_invoice = ((Average_Ticket_size/3.5)*100)+0.20;

    //factor consider and constant value 

    var Standing_in_queques_for_depositing_cheques = 5.00;
    var Manually_filling_all_the_data_after_completing_a_job = 240.00;
    var manual_accounting = 60.00 ;
    var Time_wasted_on_waiting_for_a_proper_product_from_supplier = 45.00;
    var Dual_Entry_time = 60.00;

    //Expenses which can be saved by using Smartserv.
    var cost_of_1_paper_used_for_anything =  0.20;
    var Prinitng_cost_of_per_paper = 0.20;
    var Per_min_wage_of_a_field_service_tech =  0.50;
    var Cost_of_Scheduling_software_per_user_per_month = 20.00;
	var Cost_of_accounting_software_per_month =  10.00;
    var cost_per_call_in_a_month = 0.10;


   var  Calls_which_are_booked_everyday = (Average_Number_of_calls_per_day / 100) * Percentage_of_calls_which_are_booked;

   var Additinal_revenue_which_will_be_generated_by_time_saving = ((Average_Ticket_size*1.5)-Average_Ticket_size)*Calls_which_are_booked_everyday*22*12;

   var  Yearly_revenue_according_to_the_data_subbmited =  Calls_which_are_booked_everyday * Average_Ticket_size * 22 * 12;

   var Number_of_invoices_made_per_year =  Calls_which_are_booked_everyday * 22 * 12;

	var transaction_fee_paid_to_other_gateways = ((Yearly_revenue_according_to_the_data_subbmited / 100) * 3.5) + (Number_of_invoices_made_per_year * 0.2);

	var Transaction_fees_paid_to_gateways_with_Smartserve = ((Yearly_revenue_according_to_the_data_subbmited / 100) * 1.2) + (Number_of_invoices_made_per_year * 0.1);

	var Transaction_fee_saved = (transaction_fee_paid_to_other_gateways - Transaction_fees_paid_to_gateways_with_Smartserve);

	var Smartserv_cost_which_will_be_charged_yearly = ((65 * Number_of_techs) * 12) + ((50 * Number_of_back_office_staff) * 12);

	var with_yearly_disscount_it_becomes = Smartserv_cost_which_will_be_charged_yearly - ((Smartserv_cost_which_will_be_charged_yearly / 100) * 15);



    //expenses occured per year according to the business (in USD)

	var Paper =  (Calls_which_are_booked_everyday * 22 * 12 * (0.20*(cost_of_1_paper_used_for_anything) + 0.20*(Prinitng_cost_of_per_paper)));

	var value_added_by_Time_wasted_for_all_the_techs_in_a_day = (Standing_in_queques_for_depositing_cheques + Manually_filling_all_the_data_after_completing_a_job + manual_accounting + Time_wasted_on_waiting_for_a_proper_product_from_supplier + Dual_Entry_time) * (Per_min_wage_of_a_field_service_tech) * 22 * 12;

	var Cost_of_Scheduling_software_yearely_occured = Cost_of_Scheduling_software_per_user_per_month * Number_of_techs * 12;

	var Cost_of_accounting_software_per_year =  Cost_of_accounting_software_per_month * 12;

	var Calling_cost = cost_per_call_in_a_month * Calls_which_are_booked_everyday * 22 * 12;


    //addition of all above step 

	var Addition =  Paper + value_added_by_Time_wasted_for_all_the_techs_in_a_day + Cost_of_Scheduling_software_yearely_occured + Cost_of_accounting_software_per_year + Calling_cost + Additinal_revenue_which_will_be_generated_by_time_saving + Transaction_fee_saved;

	var NET_ROI = (Yearly_revenue_according_to_the_data_subbmited - Addition - with_yearly_disscount_it_becomes);


    alert(NET_ROI);


    
}