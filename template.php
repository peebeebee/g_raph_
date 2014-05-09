<?php
/**
 * Adding the title of the current page to the breadcrumb.
 */
function g_raph_breadcrumb($variables) {
  $breadcrumb = $variables['breadcrumb'];
  if (!empty($breadcrumb)) {
    $breadcrumb[] = drupal_get_title();
    // Provide a navigational heading to give context for breadcrumb links to
    // screen-reader users. Make the heading invisible with .element-invisible.
    $output = '<h2 class="element-invisible">' . t('You are here') . '</h2>';
    $output .= '<div class="breadcrumb">' . implode(' <span class="beforetitle">»</span> ', $breadcrumb) . '</div>';
    return $output;
  }
}

/**
 * Updating to a newer jquery
 */
function g_raph_js_alter(&$javascript) {
  $jquery_path = drupal_get_path('theme', $GLOBALS['theme']) . '/js/vendor/jquery.min.js';
  $javascript['misc/jquery.js']['version'] = '1.9.1';
  $javascript['misc/jquery.js']['data'] = $jquery_path;
}

/**
 * Add " ( Page # )" to html header title for SEO.
 * So Google doesn't see the extra pages of views as duplicate content.
 */

function g_raph_preprocess_html(&$vars) {
 if (isset($_GET['page']) && is_numeric($_GET['page']) && $_GET['page'] > 0){
  $pager = t('Page @pager', array('@pager' => $_GET['page'] + 1));
   $vars['head_title'] = $vars['head_title'] . ' (' . $pager . ')';
 }
}
?>