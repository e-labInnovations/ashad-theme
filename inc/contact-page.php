<?php

//Contact page template
add_filter('template_include', 'loadContactPageTemplate', 99);
function loadContactPageTemplate($template) {
    if (is_page('contact')) {
        return plugin_dir_path(__FILE__) . '../templates/contact-page.php';
    }
    return $template;
}

//Create DB
add_action("after_switch_theme", "ashad_create_contact_db");
function ashad_create_contact_db() {
	require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );

	global $wpdb;
	$charset_collate = $wpdb->get_charset_collate();
	$table_name = $wpdb->prefix . 'ashad_contacts';

	$sql = "CREATE TABLE $table_name (
		id mediumint(9) unsigned NOT NULL AUTO_INCREMENT,
		time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
        name varchar(60) NOT NULL DEFAULT '',
        email varchar(60) NOT NULL DEFAULT '',
        subject varchar(60) NOT NULL DEFAULT '',
        message longtext COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
        status varchar(20) NOT NULL DEFAULT '1',
		UNIQUE KEY id (id)
	) $charset_collate;";

	dbDelta( $sql );
}

//Add Admin Menu
add_action('admin_menu', 'ashadContactsMenu');
function ashadContactsMenu() {
    add_menu_page( 'Contacts', 'Contacts', 'manage_options', 'ashad-contacts', 'contactsHTML', 'dashicons-email', 100 );
}

function contactsHTML() {
    ob_start();
    include_once get_stylesheet_directory() . '/inc/contacts-table.php';
    $template = ob_get_contents();
    ob_end_clean();
    echo $template;

    // global $wpdb;
    // $table_name = $wpdb->prefix . 'ashad_contacts';
    // $query = $wpdb->prepare("SELECT * FROM $table_name ORDER BY time DESC");
    // $contacts = $wpdb->get_results($query, ARRAY_A);

    // var_dump($contacts);
    $table = new contacts_List_Table();
    $table->items = $contacts;
    $table->prepare_items();
    ?>
    <div class="wrap">    
        <h2>Messages</h2>
            <div id="nds-wp-list-table-demo">			
                <div id="nds-post-body">		
                    <form id="nds-user-list-form" method="get">
                        <input type="hidden" name="page" value="<?php echo $_REQUEST['page'] ?>" />
                        <?php 
                            $table->search_box('Find', 'nds-user-find');
                            $table->display(); 
                        ?>					
                    </form>
                </div>			
            </div>
    </div>
    <?php
}


//Set Message send template
add_action( 'init',  function() {
    add_rewrite_rule( 'message-send', 'index.php?message-send=true', 'top' );
} );

add_filter( 'query_vars', function( $query_vars ) {
    $query_vars[] = 'message-send';
    return $query_vars;
} );

add_action( 'template_include', function( $template ) {
    if ( get_query_var( 'message-send' ) == false) {
        return $template;
    }
 
    return get_template_directory() . '../templates/message-send.php';
} );


//Test
// add_action('admin_head', 'onAdminRefresh');
function onAdminRefresh() {
	global $wpdb;
	$table_name = $wpdb->prefix . 'ashad_contacts';

    $now = new DateTime();

    $wpdb->insert($table_name, array(
        'time' => $now->format('Y-m-d H:i:s'),
        'name' => 'abcd',
        'email' => 'abscd@elabins.com',
        'subject' => 'Help',
        'message' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ratione tempora, quod ullam sit et in voluptates. Molestiae, unde facere!',
        'status' => '1'
    ));
}

?>