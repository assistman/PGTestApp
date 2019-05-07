//
//    The ContentViewController.m is part of the ScrollViewContainer project.
//    Copyright © 2019 Stanislav Razbiegin. All rights reserved.Proprietary and confidential.	
//    Unauthorized copying of this file via any medium is strictly prohibited.
//

#import "ContentViewController.h"
#import "AppDelegate.h"
#import "ViewController.h"

@interface ContentViewController ()

@property (strong, nonatomic) IBOutlet UITextField *field1;
@property (strong, nonatomic) IBOutlet UITextField *field2;
@property (strong, nonatomic) IBOutlet UITextField *field3;
@property (strong, nonatomic) IBOutlet UITextField *field4;
@property (strong, nonatomic) IBOutlet UITextField *field5;
@property (strong, nonatomic) IBOutlet UITextField *field6;
@property (strong, nonatomic) IBOutlet UITextField *field7;
@property (strong, nonatomic) IBOutlet UITextField *field8;

@end

@implementation ContentViewController

- (void)textFieldDidBeginEditing:(UITextField *)textField {
    [self.parentContainer activateField:textField];
}

- (void)textFieldDidEndEditing:(UITextField *)textField {
    [self.parentContainer deactivateField:textField];
}

- (void)viewWillAppear:(BOOL)animated {
    [self.parentContainer setupTextFields:@[self.field1, self.field2, self.field3, self.field4, self.field5, self.field6, self.field7, self.field8]];
    
}

@end
