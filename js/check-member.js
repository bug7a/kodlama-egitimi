
/*

Üye olup olmadığını kontrol et.

*/

var isSetupPurchasesCalled = 0;
var setupPurchasesIfDidNot = function() {
  if (isSetupPurchasesCalled == 0) {
      Purchases.setDebugLogsEnabled(true);
      Purchases.setup("dAXaqQxyeziZdZWDJgyxlCRsEAPVBHih");
      // Eğer daha önceden uyeliği var ise, bilgilerini yükler.
      // restoreTransactionsIfFirstTime();
      isSetupPurchasesCalled = 1;
  }
}

restoreTransactionsIfFirstTime = function() {

  try {

      var transactionsRestored = storage.getItem("transactions-restored");

      if (!transactionsRestored) {

          App.show_gotoPageLoading();

          Purchases.restoreTransactions(
          purchaserInfo => {

              // Restore successful
              storage.setItem("transactions-restored", "restored");
              App.hide_gotoPageLoading();

          },
          error => {

              // Error restoring purchases
              App.hide_gotoPageLoading();

          }
          );
          
      }

  } catch (e) {

  } 
      
}

var checkMember = function(runMode, succesFunc, failFunc, errorFunc) {

    var robinHoodMode = storage.getItem("robinhood-mode");

    // Eğer member.htm sayfasında ise, robinhood mode aktif olmasın.
    if (runMode == 1) {
        robinHoodMode = 0
    }

    switch (App.os) {

        case "android":

          succesFunc();

        /*
          setupPurchasesIfDidNot();

          Purchases.getPurchaserInfo(
            purchaserInfo => {

                const isMember = typeof purchaserInfo.entitlements.active["full-access"] !== "undefined";

                if (isMember || robinHoodMode) {
                  succesFunc();
                } else {
                  failFunc();
                }

              },
              error => {
                // Error fetching purchaser info
                errorFunc();
              }
            );
            */

        break;
        
        case "ios":
            
          // setupPurchasesIfDidNot();
            //ios sistemi için"
            // TODO: Direk herşeyi göster, üyelik sistemi yok.
            //kullanıcı bir üye
            succesFunc();

            break;

        case "electron":
        case "browser":
            
            //electron üyelik sistemi yok.
            succesFunc();
            // failFunc(); // FOR TEST
            // errorFunc(); // FOR TEST
            
            break;
    }
}

var canDownloadDesktopApp = function(succesFunc, failFunc, errorFunc) {

  switch (App.os) {

      case "android":

        setupPurchasesIfDidNot();

        Purchases.getPurchaserInfo(
          purchaserInfo => {

              const canDownload = typeof purchaserInfo.entitlements.active["download-desktop-app"] !== "undefined";

              if (canDownload) {
                succesFunc();
              } else {
                failFunc();
              }

            },
            error => {
              // Error fetching purchaser info
              errorFunc();
            }
          );

      break;
      
      case "ios":
          
        setupPurchasesIfDidNot();
          //ios sistemi için"
          // TODO: Direk herşeyi göster, üyelik sistemi yok.
          //kullanıcı bir üye
          succesFunc();

          break;

      case "electron":
      case "browser":
          
          //electron üyelik sistemi yok.
          //succesFunc();
          failFunc();
          // errorFunc();
          
          break;
  }
}
                      
/*

iOS için bu mekanizmaya ihtiyaç varmış.

Purchases.restoreTransactions(
  info => {
    //... check purchaserInfo to see if entitlement is now active
  },
  error => {
    // Error restoring purchases
  }
);

migration

const isSubscribedInOldSystem = oldTracking.isSubscribed()
const isSubscribedInRevenueCat = !purchaserInfo.entitlements.active.isEmpty

// If the old system says we have a subscription, but RevenueCat does not
if (isSubscribedInOldSystem && !isSubscribedInRevenueCat) 
{
  // Tell Purchases to syncPurchases. 
  // This will sync the user's receipt with RevenueCat.
  Purchases.shared.syncPurchases { (purchaserInfo, error) in }
}


*/