
import SwiftUI
import WebKit

#if os(macOS)
struct WebView: NSViewRepresentable {
    func makeNSView(context: Context) -> WKWebView {
        let webView = WKWebView()

        if let url = Bundle.main.url(
            forResource: "index",
            withExtension: "html",
            subdirectory: "barometro"
        ) {
            webView.loadFileURL(
                url,
                allowingReadAccessTo: url.deletingLastPathComponent()
            )
        } else {
            print("Error: index.html not found in barometro folder")
        }

        return webView
    }

    func updateNSView(_ nsView: WKWebView, context: Context) {}
}
#endif

struct ContentView: View {
    var body: some View {
        WebView()
            .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
}
