export class TokenService {
  accessToken: string;
  refreshToken: string;

  constructor(accessToken?: string, refreshToken?: string) {
    this.accessToken = accessToken || "";
    this.refreshToken = refreshToken || "";
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessToken);
  }

  setAccessToken(token: string): void {
    localStorage.setItem(this.accessToken, token);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshToken);
  }

  setRefreshToken(token: string): void {
    localStorage.setItem(this.refreshToken, token);
  }

  removeTokens(): void {
    localStorage.removeItem(this.accessToken);
    localStorage.removeItem(this.refreshToken);
  }
}
