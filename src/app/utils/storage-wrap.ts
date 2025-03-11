export enum STORAGE_KEY {
  USER = 'user',
}

export class StorageWrap {
  private _isAvailable = true;
  private storage: any;

  constructor(type: 'localStorage' | 'sessionStorage') {
    if (!window[type]) {
      console.warn(`No ${type} available.`);
      this._isAvailable = false;
    } else {
      this.storage = window[type];
    }
  }

  get isAvailable(): boolean {
    return this._isAvailable;
  }

  set<Subject = unknown>(key: STORAGE_KEY, raw: Subject | string) {
    if (!this._isAvailable) return;
    const value = typeof raw === 'string' ? raw : JSON.stringify(raw);
    this.storage.setItem(key, value);
  }

  get<Subject = unknown>(key: STORAGE_KEY): Subject | string | null {
    if (!this._isAvailable || !this.storage.getItem(key)) return null;
    const item = this.storage.getItem(key);
    try {
      return JSON.parse(String(item)) as Subject;
    } catch (_) {
      return item;
    }
  }

  remove(key: STORAGE_KEY): void {
    if (!this._isAvailable || !this.storage.getItem(key)) return;
    localStorage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}

export const storage = new StorageWrap('localStorage');
export const session = new StorageWrap('sessionStorage');
