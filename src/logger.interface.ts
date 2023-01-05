import LogEventLevel from './events/logEventLevel'

interface ILogger {
  IsEnabled(level: LogEventLevel): boolean

  // ILogger ForContext(ILogEventEnricher enricher);
  // ILogger ForContext(IEnumerable<ILogEventEnricher> enrichers);
  // ILogger ForContext(string propertyName, object value, bool destructureObjects = false);
  // ILogger ForContext<TSource>();
  // ILogger ForContext(Type source);

  WriteEvent(logEvent: LogEvent): void

  Write(level: LogEventLevel, error: Error, messageTemplate: string, ...propertyValues: unknown[]): void
  Write(level: LogEventLevel, messageTemplate: string, ...propertyValues: unknown[]): void

  Verbose(error: Error, messageTemplate: string, ...propertyValues: unknown[]): void
  Verbose(messageTemplate: string, ...propertyValues: unknown[]): void

  Debug(error: Error, messageTemplate: string, ...propertyValues: unknown[]): void
  Debug(messageTemplate: string, ...propertyValues: unknown[]): void

  Information(error: Error, messageTemplate: string, ...propertyValues: unknown[]): void
  Information(messageTemplate: string, ...propertyValues: unknown[]): void

  Warning(error: Error, messageTemplate: string, ...propertyValues: unknown[]): void
  Warning(messageTemplate: string, ...propertyValues: unknown[]): void

  Error(error: Error, messageTemplate: string, ...propertyValues: unknown[]): void
  Error(messageTemplate: string, ...propertyValues: unknown[]): void

  Fatal(error: Error, messageTemplate: string, ...propertyValues: unknown[]): void
  Fatal(messageTemplate: string, ...propertyValues: unknown[]): void
}

abstract class BaseLogger implements ILogger {
  IsEnabled(level: LogEventLevel): boolean {
    throw new Error('Method not implemented.')
  }

  WriteEvent(logEvent: LogEvent): void {
    throw new Error('Method not implemented.')
  }

  WriteInternal(level: LogEventLevel, errorOrMessageTemplate: Error | string, messageTemplateOrFirstValue?: string | unknown, ...restOfTheValues: unknown[]): void {
    //throw new Error("Method not implemented.");
  }

  Write(level: LogEventLevel, error: Error, messageTemplate: string, ...propertyValues: unknown[]): void
  Write(level: LogEventLevel, messageTemplate: string, ...propertyValues: unknown[]): void
  Write(level: LogEventLevel, errorOrMessageTemplate: Error | string, messageTemplateOrFirstValue?: string | unknown, ...restOfTheValues: unknown[]): void {
    this.WriteInternal(LogEventLevel.Fatal, errorOrMessageTemplate, messageTemplateOrFirstValue, restOfTheValues)
  }

  Verbose(error: Error, messageTemplate: string, ...propertyValues: unknown[]): void
  Verbose(messageTemplate: string, ...propertyValues: unknown[]): void
  Verbose(errorOrMessageTemplate: Error | string, messageTemplateOrFirstValue: string | unknown, ...restOfTheValues: unknown[]): void {
    this.WriteInternal(LogEventLevel.Verbose, errorOrMessageTemplate, messageTemplateOrFirstValue, restOfTheValues)
  }

  Debug(error: Error, messageTemplate: string, ...propertyValues: unknown[]): void
  Debug(messageTemplate: string, ...propertyValues: unknown[]): void
  Debug(errorOrMessageTemplate: Error | string, messageTemplateOrFirstValue: string | unknown, ...restOfTheValues: unknown[]): void {
    this.WriteInternal(LogEventLevel.Debug, errorOrMessageTemplate, messageTemplateOrFirstValue, restOfTheValues)
  }

  Information(error: Error, messageTemplate: string, ...propertyValues: unknown[]): void
  Information(messageTemplate: string, ...propertyValues: unknown[]): void
  Information(errorOrMessageTemplate: Error | string, messageTemplateOrFirstValue: string | unknown, ...restOfTheValues: unknown[]): void {
    this.WriteInternal(LogEventLevel.Information, errorOrMessageTemplate, messageTemplateOrFirstValue, restOfTheValues)
  }

  Warning(error: Error, messageTemplate: string, ...propertyValues: unknown[]): void
  Warning(messageTemplate: string, ...propertyValues: unknown[]): void
  Warning(errorOrMessageTemplate: Error | string, messageTemplateOrFirstValue: string | unknown, ...restOfTheValues: unknown[]): void {
    this.WriteInternal(LogEventLevel.Warning, errorOrMessageTemplate, messageTemplateOrFirstValue, restOfTheValues)
  }

  Error(error: Error, messageTemplate: string, ...propertyValues: unknown[]): void
  Error(messageTemplate: string, ...propertyValues: unknown[]): void
  Error(errorOrMessageTemplate: Error | string, messageTemplateOrFirstValue: string | unknown, ...restOfTheValues: unknown[]): void {
    this.WriteInternal(LogEventLevel.Error, errorOrMessageTemplate, messageTemplateOrFirstValue, restOfTheValues)
  }

  Fatal(error: Error, messageTemplate: string, ...propertyValues: unknown[]): void
  Fatal(messageTemplate: string, ...propertyValues: unknown[]): void
  Fatal(errorOrMessageTemplate: Error | string, messageTemplateOrFirstValue: string | unknown, ...restOfTheValues: unknown[]): void {
    this.WriteInternal(LogEventLevel.Fatal, errorOrMessageTemplate, messageTemplateOrFirstValue, restOfTheValues)
  }
}

const t = new BaseLogger()

class LogEvent {
  //accessor timestamp:string { get } = "";
  private accessor d = 1

  // public get Timestamp() :Date;

  // public get Level(): LogEventLevel;

  // public get MessageTemplate(): MessageTemplate

  // public IReadOnlyDictionary<string, LogEventPropertyValue> Properties => _properties;

  // /// <summary>
  // /// An exception associated with the event, or null.
  // /// </summary>
  // public Exception Exception { get; }

  // constructor() {
  // }
}
