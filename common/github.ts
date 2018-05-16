/* 获取GitHub源代码 */

import { setStorage, getStorage } from './util';

export interface GitHubApiResult {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  content?: string;
  encoding?: string;
}

interface StorageValue {
  build: string;
  content: GitHubApiResult[];
}

class Github {
  moduleName: string;
  sourcePath: string;
  requestPath: string;
  constructor(moduleName: string) {
    this.moduleName = moduleName;
    this.sourcePath = `example/${moduleName}/canvas`;
    this.requestPath = `https://api.github.com/repos/snayan/canvas-demo/contents`;
  }
  private fetch(path: string) {
    return fetch(`${this.requestPath}/${path}`, { credentials: 'omit', method: 'get', mode: 'cors' });
  }
  public async getCanvasFiles() {
    let files: GitHubApiResult[];
    let contents: GitHubApiResult[] = [];
    let storages: StorageValue = getStorage(this.moduleName);
    if (storages && storages.build && storages.content) {
      if (storages.build === process.env.ExampleModules[this.moduleName]) {
        return storages.content;
      }
    }

    let res = await this.fetch(this.sourcePath);
    if (!res.ok) {
      return contents;
    }
    files = await res.json();
    for (let file of files) {
      if (file.type === 'file') {
        res = await this.fetch(file.path);
        res.ok && contents.push(await res.json());
      }
    }
    setStorage(this.moduleName, { build: process.env.ExampleModules[this.moduleName], content: contents });
    return contents;
  }
}

export default Github;