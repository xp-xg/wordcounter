// Error logging utility that can be connected to external services like Sentry
interface ErrorLog {
  message: string;
  stack?: string;
  component?: string;
  timestamp: Date;
  user?: any; // User information if available
  url: string; // Current page URL
}

class ErrorLogger {
  private static instance: ErrorLogger;
  private apiUrl: string | null = null;
  private enabled: boolean = true;

  private constructor() {}

  public static getInstance(): ErrorLogger {
    if (!ErrorLogger.instance) {
      ErrorLogger.instance = new ErrorLogger();
    }
    return ErrorLogger.instance;
  }

  public init(apiUrl?: string, enabled: boolean = true) {
    this.apiUrl = apiUrl || null;
    this.enabled = enabled;
  }

  public logError(error: any, componentStack?: string) {
    if (!this.enabled) return;

    const errorLog: ErrorLog = {
      message: error.message || error.toString(),
      stack: error.stack,
      component: componentStack,
      timestamp: new Date(),
      url: window.location.href,
    };

    // Log to console in development
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error logged:', errorLog);
    }

    // Send to external logging service (e.g., Sentry, LogRocket, etc.)
    if (this.apiUrl) {
      // In a real implementation, you would send the error to your logging service
      this.sendToExternalService(errorLog);
    } else {
      // For now, just store in local session storage for debugging
      this.storeErrorLocally(errorLog);
    }
  }

  private async sendToExternalService(error: ErrorLog) {
    // In production, this would send to your error tracking service
    // Example for Sentry: Sentry.captureException(error);
    // Example for other services would have their own specific implementation
  }

  private storeErrorLocally(error: ErrorLog) {
    // Store errors in session storage for review during development
    const errors = JSON.parse(sessionStorage.getItem('app-errors') || '[]');
    errors.push(error);
    sessionStorage.setItem('app-errors', JSON.stringify(errors));
  }
}

export const errorLogger = ErrorLogger.getInstance();