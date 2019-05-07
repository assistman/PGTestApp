//
//    The TTGScrollViewContainer.h is part of the Cosmos project.
//    Copyright © 2019 KSTT. All rights reserved.Proprietary and confidential.	
//    Unauthorized copying of this file via any medium is strictly prohibited.
//

#import <UIKit/UIKit.h>

@interface TTGScrollViewContainer : UIViewController

@property (strong, nonatomic) IBOutlet UIView *mainContainer;
@property (strong, nonatomic) IBOutlet UIScrollView *mainScrollView;
@property (strong, nonatomic) IBOutlet UIView *footerView;

- (void)setupTextFields:(NSArray *)fields;

- (void)activateField:(UITextField *)textField;
- (void)deactivateField:(UITextField *)textField;

@end
