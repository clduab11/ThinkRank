// Main export file for @thinkrank/shared package

// Types - Database entities
export type {
  AIResearchProblem, AnalyticsEvent, GameProgress, GameSession, PaginatedResult, ProblemType, ResearchContribution,
  SocialInteraction, Subscription,
  SubscriptionTier, User,
  UserProfile, ValidationStatus
} from './types/database';

// Types - API requests and responses
export type {
  AnalyticsResult, ApiResponse,
  AuthResponse, BillingHistory, CreateSubscriptionRequest, HealthCheckResponse, LeaderboardResponse,
  LoginRequest, PasswordResetRequest, PaymentMethod, RefreshTokenRequest, RegisterRequest, SocialFeedEntry, StartGameSessionRequest,
  SubmitSolutionRequest, SubscriptionPlan, TrackEventRequest, UpdateProfileRequest, UserStatsResponse
} from './types/api';

// Types - Supabase generated types
export type { Database, Json } from './types/supabase';

// Configuration
export {
  DatabaseTransaction, getDatabase, getDatabaseConfig, QueryBuilder, SupabaseClientFactory
} from './config/database';

// Validation utilities and schemas
export {
  emailSchema, loginRequestSchema, paginationSchema, passwordSchema, registerRequestSchema, startGameSessionRequestSchema,
  submitSolutionRequestSchema,
  trackEventRequestSchema, updateProfileRequestSchema, usernameSchema,
  // Validation schemas
  uuidSchema, ValidateBody,
  ValidateQuery, ValidationUtils
} from './utils/validation';

// Error classes and utilities (renamed ValidationError to avoid conflict)
export {
  AppError,
  AuthenticationError,
  AuthorizationError, BusinessLogicError, ConflictError, ContributionError, DatabaseError, ErrorFormatter,
  ErrorHandler, ExternalServiceError, isAppError, isAuthenticationError,
  isNotFoundError, isValidationError, NotFoundError, PaymentError, RateLimitError, ResearchValidationError, SubscriptionError, ValidationError as ValidationAppError
} from './utils/errors';

// Logging utilities
export {
  AuditLogger,
  defaultLogger, HealthLogger, Logger,
  PerformanceLogger, QueryLogger, RequestLogger
} from './utils/logger';

// Constants
export const API_VERSION = '1.0.0';
export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;

// Common response helpers
export const createSuccessResponse = <T>(data: T, meta?: any) => ({
  success: true as const,
  data,
  meta: {
    timestamp: new Date().toISOString(),
    version: API_VERSION,
    ...meta
  }
});

export const createErrorResponse = (error: any, meta?: any) => ({
  success: false as const,
  error,
  meta: {
    timestamp: new Date().toISOString(),
    version: API_VERSION,
    ...meta
  }
});
