USE [MyECommerce]
GO
/****** Object:  UserDefinedFunction [dbo].[udfApplyDiscount]    Script Date: 7/19/2019 7:31:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date, ,>
-- Description:	<Description, ,>
-- =============================================
ALTER FUNCTION [dbo].[udfApplyDiscount]
(
	-- Add the parameters for the function here
	@Price float,
	@Discount varchar(30)
)
RETURNS float
AS
BEGIN
DECLARE @DiscountedPrice float  
DECLARE @NetPrice float 
DECLARE @disc float
	-- Declare the return variable here
	IF EXISTS(SELECT name from coupons where name = @Discount)
	BEGIN
		SET @disc  = (SELECT CONVERT(INT , (SELECT SUBSTRING(@Discount,LEN(@Discount) - 1,2))));
		SET @DiscountedPrice = (@disc/100) * @Price;
		SET @NetPrice = @Price - @DiscountedPrice;
	
	END

	 -- Add the T-SQL statements to compute the return value here
	
	-- Return the result of the function
	RETURN @NetPrice

END


