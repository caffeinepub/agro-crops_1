declare module "@emailjs/browser" {
  interface EmailJSResponseStatus {
    status: number;
    text: string;
  }
  function send(
    serviceID: string,
    templateID: string,
    templateParams: Record<string, unknown>,
    options?: { publicKey?: string } | string
  ): Promise<EmailJSResponseStatus>;
  function init(options: { publicKey: string } | string): void;
  export default { send, init };
}
