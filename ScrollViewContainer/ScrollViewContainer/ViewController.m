//
//    The ViewController.m is part of the ScrollViewContainer project.
//    Copyright © 2019 Stanislav Razbiegin. All rights reserved.Proprietary and confidential.	
//    Unauthorized copying of this file via any medium is strictly prohibited.
//

#import "ViewController.h"

@interface ViewController ()

- (IBAction)openContainer:(id)sender;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}

- (void)openScrollViewContainer {
    UIStoryboard *story = [UIStoryboard storyboardWithName:@"ViewContainers" bundle:nil];
    UINavigationController *nav = [story instantiateInitialViewController];
    self.containerVC = (TTGScrollViewContainer *)nav.topViewController;
    [self presentViewController:nav animated:YES completion:nil];
}

- (IBAction)openContainer:(id)sender {
    [self openScrollViewContainer];
}

@end
