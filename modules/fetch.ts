/**
 * @jointjs/modules
 * written by smokingplaya 2024
 * distributed under the license GPL-3.0
 * * https://github.com/haronmc/jointjs_modules/blob/main/LICENSE
 */

declare const Java: any;

type methods = "get" | "post" | "head" | "put" | "delete" | "connect" | "options" | "trace" | "patch";

interface FetchOptions {
  method?: methods;
  headers?: { [key: string]: string; };
  body?: string | Object;
}

interface FetchResponse {
  status: number;
  text: () => Promise<string>;
  json: () => Promise<any>;
}

const URL = Java.type('java.net.URL');
const BufferedReader = Java.type('java.io.BufferedReader');
const InputStreamReader = Java.type('java.io.InputStreamReader');
const DataOutputStream = Java.type('java.io.DataOutputStream');

function fetch(url: string, options?: FetchOptions): Promise<FetchResponse> {
  return new Promise((resolve, reject) => {
    try {
      const method = options && options.method || "GET";
      const javaUrl = new URL(url);
      const connection = javaUrl.openConnection();
      connection.setRequestMethod(method.toUpperCase());

      if (options && options.headers) {
        for (const [key, value] of Object.entries(options.headers)) {
          connection.setRequestProperty(key, value);
        }
      }

      if (options && (options.method === 'post' || options.method === 'put') && options.body) {
        const body = options.body;
        connection.setDoOutput(true);
        const outputStream = new DataOutputStream(connection.getOutputStream());
        outputStream.writeBytes(typeof body == "object" ? JSON.stringify(body) : body);
        outputStream.flush();
        outputStream.close();
      }

      const status = connection.getResponseCode();
      const reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
      let inputLine: string;
      let response = '';
      while ((inputLine = reader.readLine()) !== null) {
        response += inputLine;
      }
      reader.close();

      resolve({
        status: status,
        text: () => Promise.resolve(response),
        json: () => Promise.resolve(JSON.parse(response))
      });
    } catch (error) {
      reject(error);
    }
  });
}

export default fetch;
