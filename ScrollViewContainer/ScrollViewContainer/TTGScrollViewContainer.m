//
//    The TTGScrollViewContainer.m is part of the Cosmos project.
//    Copyright © 2019 KSTT. All rights reserved.Proprietary and confidential.	
//    Unauthorized copying of this file via any medium is strictly prohibited.
//

#import "TTGScrollViewContainer.h"
#import "ContentViewController.h"

@interface TTGScrollViewContainer ()

@property (strong, nonatomic) IBOutlet UIView *contentContainer;
@property (strong, nonatomic) UIViewController *currentChild;

@property (strong, nonatomic) IBOutlet NSLayoutConstraint *scrollContainerConstraint;
@property (strong, nonatomic) UITextField *currentField;
- (IBAction)confirmAction:(id)sender;
- (IBAction)close:(id)sender;

@end

@implementation TTGScrollViewContainer

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    
    [self subscribeForNotifications];
    [self setupUI];
}

- (void)setupUI {
    [self setupScrollView];
    [self setupChildVC];
}

- (void)setupWithContentController:(UIViewController *)contentVC {
    [self addChildController:contentVC];
    self.currentChild = contentVC;
}

- (void)setupChildVC {
    if (self.currentChild) {
        return;
    }
    UIStoryboard *story = [UIStoryboard storyboardWithName:@"ViewContainers" bundle:nil];
    ContentViewController *childVC = [story instantiateViewControllerWithIdentifier:@"ContentViewController"];
    [self addChildController:childVC];
    childVC.parentContainer = self;
    self.currentChild = childVC;
}

- (void)setupTextFields:(NSArray *)fields {
    UIView *toolbarView = [self createToolbar];
    for (UITextField *field in fields) {
        field.inputAccessoryView = toolbarView;
    }
}

- (void)setupScrollView {
    // This is needed to have a small gap when keyboard appears and scrolls text field to visible
    self.mainScrollView.contentInset = UIEdgeInsetsMake(16.0, 0, 16.0, 0);
}

- (void)addChildController:(UIViewController*)childController {
    childController.view.translatesAutoresizingMaskIntoConstraints = NO;
    [self addChildViewController:childController];
    [self.contentContainer addSubview:childController.view];
    [self stretchToSuperviewEdges:childController.view];
    [childController.view layoutIfNeeded];
    [childController didMoveToParentViewController:self];
}

- (void)removeChildController:(UIViewController*)childController {
    [childController willMoveToParentViewController:nil];
    [childController.view removeFromSuperview];
    [childController removeFromParentViewController];
}

- (UIToolbar *)createToolbar {
    CGFloat width = CGRectGetWidth(UIScreen.mainScreen.bounds);
    UIToolbar *toolbar = [[UIToolbar alloc]initWithFrame:CGRectMake(0, 0, width, 50)];
    toolbar.barStyle = UIBarStyleBlackTranslucent;
    UIBarButtonItem *space = [[UIBarButtonItem alloc]initWithBarButtonSystemItem:UIBarButtonSystemItemFlexibleSpace target:nil action:nil];
    UIBarButtonItem *previous = [[UIBarButtonItem alloc]initWithTitle:@"Previous"
                                                            style:UIBarButtonItemStyleDone
                                                           target:self
                                                           action:@selector(previousField)];
    UIBarButtonItem *next = [[UIBarButtonItem alloc]initWithTitle:@"Next"
                                                            style:UIBarButtonItemStyleDone
                                                           target:self
                                                           action:@selector(nextField)];
    toolbar.items = @[previous, space, next];
    [toolbar sizeToFit];
    
    return toolbar;
}

- (void)previousField {
    if (!self.currentField) {
        return;
    }
    UITextField *previous = [self.currentChild.view viewWithTag:self.currentField.tag - 1];
    [previous becomeFirstResponder];
}

- (void)nextField {
    if (!self.currentField) {
        return;
    }
    UITextField *next = [self.currentChild.view viewWithTag:self.currentField.tag + 1];
    [next becomeFirstResponder];
}

- (void)activateField:(UITextField *)textField {
    self.currentField = textField;
}

- (void)deactivateField:(UITextField *)textField {
    self.currentField = nil;
}

#pragma mark - Keyboard Notifications

- (void)subscribeForNotifications {
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(keyboardWillAppear:) name:UIKeyboardWillShowNotification object:nil];
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(keyboardDidAppear:) name:UIKeyboardDidShowNotification object:nil];
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(keyboardWillDisappear:) name:UIKeyboardWillHideNotification object:nil];
}

- (void)keyboardWillAppear:(NSNotification *)notification {
    [self.view layoutIfNeeded];

    UIViewAnimationOptions animationOptions = [notification.userInfo[UIKeyboardAnimationCurveUserInfoKey] integerValue];
    CGFloat animationDuration = [notification.userInfo[UIKeyboardAnimationDurationUserInfoKey] doubleValue];
    CGRect keyboardFrame = [notification.userInfo[UIKeyboardFrameEndUserInfoKey] CGRectValue];
    CGFloat topConstantValue = -CGRectGetHeight(keyboardFrame);
    if (self.scrollContainerConstraint.constant == topConstantValue) {
        return;
    }
    
    // This takes into account iPhoneX screen specifics
    CGFloat adjustment = CGRectGetMaxY(self.view.frame) - CGRectGetMaxY(self.mainContainer.frame);
    self.scrollContainerConstraint.constant = topConstantValue + adjustment;
    typeof(self) __weak weakSelf = self;
    [UIView animateWithDuration:animationDuration delay:0 options:animationOptions animations:^{
        [weakSelf.view setNeedsLayout];
        [weakSelf.view layoutIfNeeded];
    } completion:nil];
}

- (void)keyboardDidAppear:(NSNotification *)notification {
    [self.mainScrollView scrollRectToVisible:self.currentField.frame animated:YES];
}

- (void)keyboardWillDisappear:(NSNotification *)notification {
    self.scrollContainerConstraint.constant = 0;
}

#pragma mark - Actions

- (void)resignActiveField {
    [self.currentField resignFirstResponder];
}

- (IBAction)confirmAction:(id)sender {
    [self dismissViewControllerAnimated:YES completion:nil];
}

- (IBAction)close:(id)sender {
    [self.currentField resignFirstResponder];
    [self dismissViewControllerAnimated:YES completion:nil];
}

- (void)stretchToSuperviewEdges:(UIView *)view {
    view.translatesAutoresizingMaskIntoConstraints = NO;
    NSDictionary *bindings = NSDictionaryOfVariableBindings(view);
    NSString *formatTemplate = @"%@:|[view]|";
    for (NSString * axis in @[@"H",@"V"]) {
        NSString * format = [NSString stringWithFormat:formatTemplate,axis];
        NSArray * constraints = [NSLayoutConstraint constraintsWithVisualFormat:format
                                                                        options:0
                                                                        metrics:nil
                                                                          views:bindings];
        [view.superview addConstraints:constraints];
    }
}

@end
