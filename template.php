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
?>