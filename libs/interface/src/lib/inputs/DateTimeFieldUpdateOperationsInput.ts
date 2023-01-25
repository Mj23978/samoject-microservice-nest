import { Field, InputType } from "@nestjs/graphql";

@InputType("DateTimeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class DateTimeFieldUpdateOperationsInput {
  @Field(() => Date, {
    nullable: true
  })
  set?: Date | undefined;
}
