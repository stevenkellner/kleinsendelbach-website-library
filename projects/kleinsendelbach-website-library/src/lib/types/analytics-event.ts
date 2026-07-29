import { EventParams } from '@angular/fire/analytics';

export type AnalyticsEventParameters = {
    'add_payment_info': {
        coupon?: EventParams['coupon'];
        currency?: EventParams['currency'];
        items?: EventParams['items'];
        payment_type?: EventParams['payment_type'];
        value?: EventParams['value'];
    };
    'add_shipping_info': {
        coupon?: EventParams['coupon'];
        currency?: EventParams['currency'];
        items?: EventParams['items'];
        shipping_tier?: EventParams['shipping_tier'];
        value?: EventParams['value'];
    };
    'add_to_cart':{
        currency?: EventParams['currency'];
        value?: EventParams['value'];
        items?: EventParams['items'];
    };
    'add_to_wishlist':{
        currency?: EventParams['currency'];
        value?: EventParams['value'];
        items?: EventParams['items'];
    };
    'remove_from_cart': {
        currency?: EventParams['currency'];
        value?: EventParams['value'];
        items?: EventParams['items'];
    };
    'begin_checkout': {
        currency?: EventParams['currency'];
        coupon?: EventParams['coupon'];
        value?: EventParams['value'];
        items?: EventParams['items'];
    };
    'checkout_progress': {
        currency?: EventParams['currency'];
        coupon?: EventParams['coupon'];
        value?: EventParams['value'];
        items?: EventParams['items'];
        checkout_step?: EventParams['checkout_step'];
        checkout_option?: EventParams['checkout_option'];
    };
    'exception': {
        description?: EventParams['description'];
        fatal?: EventParams['fatal'];
    };
    'generate_lead': {
        value?: EventParams['value'];
        currency?: EventParams['currency'];
    };
    'login': {
        method?: EventParams['method'];
    };
    'page_view': {
        page_title?: string;
        page_location?: string;
        page_path?: string;
    };
    'purchase': {
        value?: EventParams['value'];
        currency?: EventParams['currency'];
        transaction_id: EventParams['transaction_id'];
        tax?: EventParams['tax'];
        shipping?: EventParams['shipping'];
        items?: EventParams['items'];
        coupon?: EventParams['coupon'];
        affiliation?: EventParams['affiliation'];
    };
    'refund': {
        value?: EventParams['value'];
        currency?: EventParams['currency'];
        transaction_id: EventParams['transaction_id'];
        tax?: EventParams['tax'];
        shipping?: EventParams['shipping'];
        items?: EventParams['items'];
        coupon?: EventParams['coupon'];
        affiliation?: EventParams['affiliation'];
    };
    'screen_view': {
        firebase_screen: EventParams['firebase_screen'];
        firebase_screen_class: EventParams['firebase_screen_class'];
    };
    'search': {
        search_term?: EventParams['search_term'];
    };
    'view_search_results': {
        search_term?: EventParams['search_term'];
    };
    'select_content': {
        content_type?: EventParams['content_type'];
        item_id?: EventParams['item_id'];
    };
    'select_item': {
        items?: EventParams['items'];
        item_list_name?: EventParams['item_list_name'];
        item_list_id?: EventParams['item_list_id'];
    };
    'select_promotion': {
        items?: EventParams['items'];
        promotion_id?: EventParams['promotion_id'];
        promotion_name?: EventParams['promotion_name'];
    };
    'view_promotion': {
        items?: EventParams['items'];
        promotion_id?: EventParams['promotion_id'];
        promotion_name?: EventParams['promotion_name'];
    };
    'set_checkout_option': {
        checkout_step?: EventParams['checkout_step'];
        checkout_option?: EventParams['checkout_option'];
    };
    'share': {
        method?: EventParams['method'];
        content_type?: EventParams['content_type'];
        item_id?: EventParams['item_id'];
    };
    'sign_up': {
        method?: EventParams['method'];
    };
    'timing_complete': {
        name: string;
        value: number;
        event_category?: string;
        event_label?: string;
    };
    'view_cart': {
        currency?: EventParams['currency'];
        items?: EventParams['items'];
        value?: EventParams['value'];
    };
    'view_item': {
        currency?: EventParams['currency'];
        items?: EventParams['items'];
        value?: EventParams['value'];
    };
    'view_item_list': {
        items?: EventParams['items'];
        item_list_name?: EventParams['item_list_name'];
        item_list_id?: EventParams['item_list_id'];
    };
};
