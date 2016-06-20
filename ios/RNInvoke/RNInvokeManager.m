//
//  RNInvoke.m
//  RNInvoke
//
//  Created by Tal Kol on 6/20/16.
//  Copyright © 2016 Wix. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "RNInvokeManager.h"
#import "MethodInvocation.h"


@implementation RNInvokeManager

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(execute:(NSDictionary *)invocation
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    id result = [MethodInvocation invoke:invocation withBridge:self.bridge onError:^(NSString *details)
    {
        reject(@"invoke_error", details, nil);
        return;
    }];
    result = [MethodInvocation serializeValue:result withType:[invocation objectForKey:@"returns"] onError:^(NSString *details)
    {
        reject(@"invoke_error", details, nil);
        return;
    }];
    resolve(result);
}

@end
