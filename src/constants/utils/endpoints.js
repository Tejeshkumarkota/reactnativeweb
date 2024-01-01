export default {
  //----------------AUTH------------------------
  email_login: "/login",
  forgot_password: "/forgotPassword",
  savepushtoken: "/pushNotification",
  //----------------TOKEN REFRESH------------------------
  refresh_token: "/refreshToken",
  //----------------CONGIF------------------------
  get_config: "/getConfig",
  //----------------ACCESS CARD------------------------
  requesting_access_card: "/tenant/accessCard",
  get_alloted_access_card: "/getAllotedAccessCards?property_id=1",
  get_access_card: "/facility/accessCards",
  access_card_update: "/facility/accessCards/save",
  access_card_status_update: "/facility/mi/status/update",
  access_card_handover: "/facility/accessCards/handOver",
  //----------------PARKING ISSUES------------------------
  parking_issues: "/tenant/parkingIssue",
  //----------------UNDER TAKING LETTER----------------------
  under_taking_letter: "/tenant/undertakingLetter",
  //----------------PROPERTY LEASE INFO----------------------
  property_lease_info: "/contract/view/",
  PROPERTYDETAILS: "/propertyDetails/",
  //---------------- LIKES ------------------------
  GET_ALL_LIKES: "/getAllUserLikes",
  ADD_MY_LIKES: "/myLikes",
  //----------------MyTeam INFO------------------------
  my_team_info: "/facility/myTeam",
  //----------------ANNOUNCEMENTS--------------------
  announcements_create: "/announcements/create",
  // announcements_list: "/announcements/list?building_id=0&status=open",
  announcements_list: "/announcements/list",
  // announcements_list_open_close: "/announcements/list?building_id=0",
  announcements_closed: "/announcements/list?building_id=0&status=closed",
  announcements_approved: "/announcements/list?status=approved",
  specific_announcements_detail: "/announcements/list?id=",
  master_data: "/getMasterData",
  my_team_Create: "/user/create",
  //----------------WORK ORDERS------------------------
  // workOrder_Info: "/facility/work/orders?building_id=0",
  workOrder_Info: "/facility/work/orders",
  workOrder_Create_Checklist: "/facility/work/order/checklist/damage/create",
  workOrder_damage_Checklist: "/facility/work/order/checklist/damage/list?work_order_id=",
  workOrder_damage_comments_list: "/facility/work/orders/comments/list?work_order_id=",
  workOrder_comment_submit: "/facility/work/orders/comments",
  specific_workOrder_details: "/facility/work/orders?id=",
  workOrder_Checklist: "/facility/work/order/checklist/questions",
  workOrder_Checklist_Modal: "/facility/work/order/onHold",
  //---------------PROPERTY------------------------
  property_filter: "/propertyFilter",
  recently_viewed_property: "/property/recentlyViewedProperties",
  workOrder_Assign: "/facility/work/assign",
  PROPERTY_FILTER_DATA: "/property/getPropertyFilterData",
  //------------------Profile------------------------------------
  profile: "/profile",
  update_profile: '/updateProfile',
  faq: '/faq',
  USER_NOTIFICATION: "/userNotification",
  //----------------PROFILE LISTING------------------------
  USER_PROFILE_UPDATE: "/updateProfile",
  USER_PROFILE: "/profile",
  CONTACT_DIARY_Email: "/user/contacts/email/create",
  CONTACT_DIARY_LIST: "/user/contacts/lists",
  FAQ_LISTING: "/faq",
  //-------------UPDATE PASSWORD-------------------
  USER_PASSWORD_UPDATE: "/updatePassword",
  //----------------MESSAGE------------------------
  USER_MESSAGE: "/getMessageForUser",
  SEND_MESSAGE: "/sendMessage",
  //------------- My Documents-------------------
  ADD_MY_DOCS: "/addMyDoc",
  GET_MY_DOCS: "/getMyDoc",
  DELETE_MY_DOCS: "/deleteMyDoc",
  DOCUMENT_REQUEST: "/getDocumentRequestType",
  DOCUMENT_LIST: "/facility/documents/list",
  DOCUMENT_Specific_detail: "/facility/documents/list?id=",
  //----------------MAINTENANCE REQUEST--------------------
  maintenance_Request: "/facility/mr/issues",
  new_maintenance_request: "/tenant/mr/create",
  maintenance_Request_Upload: "/facility/mr/status/onhold",
  maintenance_Request_Specific_task_details: "/facility/mr/issues?id=",
  //----------------REPORTS------------------------
  reports_list: "/facility/reports",
  finance_reports: '/finance/reports',
  market_reports: '/marketing/reports',
  fc_reports: '/facility/count/reports',
  //----------------REPORTS------------------------
  move_in_inspection: "/tenant/moveInInspection",
  //----------------CALENDAR------------------------
  calendar_info: "/facility/calendar",
  //----------------APPROVALS------------------------
  approval_list: "/approval/list",
  //----------------AVAILABLE PROPERTY------------------------
  available_open_property_list: "/pm/getPropertyList/available",
  available_upcoming_property_list: "/pm/getPropertyList/upcoming",

  //----------------OFFERS------------------------
  offer_list: "/pm/offer/lists",

  //----------------RENEWALS------------------------
  renewal_list: "/pm/renewal/lists",

  //---------------Visits----------------------
  scheduled_visits: "/pm/visits/list",
  vistior_specific_details: "/facility/visitor/list?id=",
  //-----------------RECENT_REQUEST--------------
  recent_request: "/facility/requests/recent",
  //--------------------ALERTS--------------------------
  ALERTS_LISTING: "/getAlerts",
  ALERTS_ADDING: "/addAlerts",
  ALERTS_REMOVE: "/myAlertStatus/remove",
  ALERT_SUBSCRIBE: "/myAlertStatus/subscribe",
  ALERT_UNSUBSCRIBE: "/myAlertStatus/unsubscribe",
  //-------------------Visitors----------------------------
  Visitors: '/facility/visitor/list',
  Visitors_Building: '/facility/building/list',
  Visitors_Create: '/facility/visitor/create',
  Building: '/getFmCommunityUser',
  Building_Document: '/facility/building/contract/properties',
  Visitor_Type: '/getAllVisitorType',
  Visitor_Check: '/facility/visitor/inOut',
  //---------------------Parking--------------------------
  Parking: '/facility/parking/slots',
  //------------MOVEOUT----------------------
  moveout_Approval: "/tenant/moveOutApproval",
  moveout_Inspection: "/tenant/moveOutInspection",
  moveout_Accesscard: "/tenant/returnAccessCard",
  //--------------------Directory-----------------------
  Directory: '/user/list',
  Directorys: '/user/list',

  //----------------MARKETPLACE-------------------------
  ALL_MARKETPLACE: "/getAllMarketPlace",
  MARKETPLACE_DETAIL: "/marketPlaceDetails/",
  MARKETPLACE_DETAIL_AVAILABLE_OFFERS: "/availableOffers/",
  UPDATE_MARKETPLACE: "/updateMarketPlace",
  ADD_MARKETPLACE: "/addMarketPlace",
  //--------------------Document_File---------------------------
  Document_File: '/facility/documents/create',
  Document_Update: '/facility/documents/sendDocument',
  //--------------------Attendance_Screen---------------------------
  Attendance_Screen: '/user/attendance/list?date=2022-03-28&role=FCSS',
  // ------------------Vehicle Registration-------------------
  Vehicle_Registration_Details: "/tenant/vehicleRegistration",

  // ------------------------Approve_Button------------------------
  Approval_Button: '/pm/approve/2',
  Reject_Button: '/pm/reject/2',
  Safty_Precautions: "/tenant/generalPTW/safetyPrecautions",
  // ------------------------Lease_Details------------------------
  Lease_Details: '/finance/lease/list',
  // ------------------------Receipt Screen------------------------
  Receipt_Screen: '/finance/receipt',
  // ------------------------Lease Payment------------------------
  Payment_Screen: '/finance/payments',
  Lease_Payment: '/finance/leaseDetails',
  Payment_History: '/finance/payments',
  //------------------------Finance Team Services---------------------
  FinanceServicesListOpen: '/finance/services?status=open',
  FinanceServicesListClosed: '/finance/services?status=closed',
  FinanceServicesListDetail: '/finance/services?',
  FinanceChequeDelayRequests: '/finance/ChequeDelayRequests/list',
  FinanceChequeReplaceRequests: '/finance/ChequeReplaceRequests/list',
  FinanceMoveOutRequestDetails: '/finance/moveOutRequestDetails/',

  //---------------------------Refunds--------------------------------
  Refunds_requestcard: '/finance/refunds?',
  Refunds_requestcard_details: '/finance/refunds',
  //---------------------------Moveout Request--------------------------------
  Moveout_Request: '/finance/moveOutRequests',
  //---------------------------Promotion Screen--------------------------------
  Promotion_Screen: '/marketing/promotions/list',
  Promotion_List: '/marketing/marketplace/list',
  Promotion_Create: '/marketing/createEvent',
  Promotion_Reject_Modal: '/approvals/reject',
  Promotion_Request_Modal: '/approvals/rmi',
  Moveout_Request_Card: '/finance/moveOutRequestDetails',
  Moveout_Request_PaymentCard: '/finance/moveOutRequestPayments',
  Moveout_DocumentsList: '/finance/moveOutRequestDocuments',
  //---------------------------Rate Us------------------------------------
  Rate_Us: '/rateUs',
  //------------------Appointment------------------------
  Appointment_Store: "/facility/appointment/create",
  Appointment_Reshedule: "/facility/appointment/reschedule",
  //------------------Work Order Update------------------
  StatusUpdate: "/facility/work/order/update",
  //--------------MOVE IN CATEGORY LIST---------------
  // MOVE_IN_CATEGORY_LIST: "/services/sr/categories/list",
  MOVE_IN_CATEGORY_LIST: "/services/sr/categories/list?tenant_type=1",
  //---------------Clearance Moveout ----------------
  Clearance_Moveout: "/tenant/mo/clearance/charge/create",
  Clearance_Moveout_List: "/tenant/mo/clearance/charge/List",
  Clearance_Moveout_Update: "/tenant/mo/clearance/charge/update",
  //--------------MOVEININSPECTION---------------
  MOVEININSPECTION_UPDATE: "/tenant/updateMoveInInspection",
  MOVEININSPECTION_SUBMIT: "/tenant/submitMoveInInspection",
  //--------------Approvals Screen----------
  approval_screen: "/approval/list",
  //--------------Create_Offer Screen----------
  Create_Offer: "/marketing/offer/create",
  Offer_Details_List: "/marketing/offer/list",
  // Offer_Details_Screen: "/marketing/getMPOfferDeatils",
  Offer_Details_Screen: "/marketing/offer/list?id=",
  Send_Offer_Screen: "/marketing/Offer/Send",
  Voucher_Details_List: "/marketing/marketplace/list",
  Create_Voucher: "/marketing/createVoucher",
  //------------Maintenance Category List----------------------
  MAINTENANCE_CATEGORY_LIST: "/services/mr/categories/list",
  GET_PRECISE_LOCATION: "/getPreciseLocations",
  PRECISE_LOCATION_AREAS: "/PL/commonArea",
  MAINTENANCE_AVAILABLE_TIMINGS_LIST: "/tenant/availableTimings",
  GETTING_LIST_OF_UNITS: "/facility/user/company?user_id=",
  MAINTENANCE_REQUEST_SUBMIT: "/tenant/mr/create",
  MAINTENANCE_LIST: "/facility/mr/issues",

  //------------PROPERTY List----------------------
  available_property_list: '/pm/getPropertyList/available',
  upcoming_property_list: '/pm/getPropertyList/upcoming',
  property_detail: '/pm/propertyDetails',
  //------------Offer----------------------
  offer_detail: "/pm/offerDetail",
  offer_approve: "/pm/approve",
  offer_reject: "/pm/reject",

  approve: "/approvals/approve",
  reject: "/approvals/reject",
  request_more_info: "/approvals/rmi",
  approval_add_comments: "/approvals/reply",
  approvals_comments_list: "/marketing/approval/comments?approval_id=",


  //-------------Incident --------------------
  incident_list: "/facility/incident/list",
  incident_service_list: "/getIncidentLists?id_sort=1",
  add_incident: "/facility/incident/create",
  update_incident: "/facility/incident/update",
  report_incident: "/facility/incident/report",
  report_incident_specific_issue: "/facility/incident/list?id=",
  //------------Activity----------------------
  list_of_activities: "/pm/activity",
  request_type_list_for_activity: "/getActivityRequestTypes",
  buildings_list: "/building/block/lists",
  property_listing: "/property/list",
  user_listings: "/user/list?type=residents",
  add_activity_fcs: "/pm/activity/create",
  update_activity_fcs: "/pm/activity/update/status",
  activity_details: "/pm/activityDetails/",
  //----------WORK ORDERS FCS -----------
  get_list_of_techinicians: '/myTeam?id_role=FC',
  get_list_of_teams: '/myTeam?user_role=',
  get_list_of_all_teams: '/user/list?user_role=',
  assign_and_reAssign_techinicians: '/facility/work/assign',
  //--------------Merchant Details Screen----------
  Merchant_Detail_List: "/marketing/listMerchant",
  Add_Merchant: "/marketing/addMerchant",
  //----------FCS Add Team -----------
  get_list_of_company: '/facility/user/company?user_id=',
  get_all_companies: "/myteam/companies",
  get_list_of_buildings_property: '/getFmCommunityUser?user_id=',
  get_list_of_user_types: '/user/types',
  team_work_orders: '/facility/work/orders',
  // ------- Parking Report ------------
  reports_issue: '/facility/issue/report',
  // ------- TENANT ------------
  tenant_search: '/pm/tenantSearch/list',
  // ------------------------Building_List------------------------
  building_List: '/facility/building/list',
  //------------------------My Team------------------------
  myTeam: 'myTeam',
  //------------------------Send Notifications------------------------
  email_receipt_send: '/payment/email/receipt/send',
  notification_receipt_send: '/payment/alert/notification/send',
  finance_email_receipt_send: '/finance/email/invoice/send',
  //------------------------Notifications------------------------
  schedule_visit_details: '/pm/visits/list?id=',
  //------------------------QR CODE------------------------
  qr_code_status_update: '/qr/scan/update',
  //------------------------Finance Report Type -----------------
  finance_reports_type: '/getPaymentType',
  //------------------------Finance Add Charge -----------------
  finance_add_charge: '/finance/termination/charges/add',
  //------------------------- Marketing Approval Detail ------------------
  market_approval_detail: '/marketing/getMPDeatils',

  user_status_update: "/user/updateStatus",
  user_update: "/user/updateUser/"
};
