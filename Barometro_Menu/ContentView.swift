import SwiftUI
import WebKit

struct WebView: NSViewRepresentable {
    func makeNSView(context: Context) -> WKWebView {
        let web = WKWebView()
        if let url = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "barometro") {
            web.loadFileURL(url, allowingReadAccessTo: url.deletingLastPathComponent())
        }
        return web
    }
    func updateNSView(_ nsView: WKWebView, context: Context) {}
}

struct ContentView: View {
    var body: some View { WebView() }
}
