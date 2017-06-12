//
//  RNInvoke.h
//  RNInvoke
//
//  Created by Tal Kol on 6/20/16.
//  Copyright © 2016 Wix. All rights reserved.
//

#if __has_include(<React/RCTBridgeModule.h>)
// React Native >= 0.40
#import <React/RCTBridgeModule.h>
#else
// React Native <= 0.39
#import "RCTBridgeModule.h"
#endif

@interface RNInvokeManager : NSObject <RCTBridgeModule>

@end
