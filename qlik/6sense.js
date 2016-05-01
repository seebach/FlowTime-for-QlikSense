/*
 * Basic Mashup template with absolute positioning
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port: "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.setOnError( function ( error ) {
		alert( error.message );
	} );

	//callbacks -- inserted here --
	//open apps -- inserted here --
//	var app = qlik.openApp('KNOWWATER (1).qvf', config);
	var app = qlik.openApp('HACKATON_2016_6thSense_Team.qvf', config);


	//get objects -- inserted here --
	//get objects -- inserted here --
	app.getObject('QV01','jhJXFE');
	app.getObject('QV02','pgLTTXW');
	app.getObject('QV03','DdMTLaR');
	app.getObject('QV04','hjbmjnj');
	app.getObject('QV05','pJMFgw');
	app.getObject('QV06','JCeASjX');
	app.getObject('QV07','AxPmxs');

	//create cubes and lists -- inserted here --
	app.getObject( 'CurrentSelections', 'CurrentSelections' );

} );
