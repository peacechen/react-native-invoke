//
//  MethodInvocation.h
//  Detox
//
//  Created by Tal Kol on 6/16/16.
//  Copyright © 2016 Wix. All rights reserved.
//

#import <Foundation/Foundation.h>
#if __has_include(<React/RCTBridge.h>)
// React Native >= 0.40
#import <React/RCTBridge.h>
#else
// React Native <= 0.39
#import "RCTBridge.h"
#endif

@interface MethodInvocation : NSObject

+ (id) invoke:(NSDictionary*)params withBridge:(RCTBridge*)bridge onError:(void (^)(NSString*))onError;
+ (id) serializeValue:(id)value onError:(void (^)(NSString*))onError;

@end
