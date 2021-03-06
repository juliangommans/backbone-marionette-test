require_relative 'class_super'

class Tiger < ClassSuper
  attr_reader :move_list

  def initialize(name)
    super
    @stats << @hp = 110.0
    @stats << @atk = 40.0
    @stats << @def = 25.0
    @stats << @spd = 35.0
    @stats << @eng = 20.0
    @stats << @res = 20.0
    @move_list = [TierOneWaterMoves.ice_slash_1, TierOneWaterMoves.chill_blaines_1, TierOneWaterMoves.squirt_1, TierOneWaterMoves.splash_1, TierOneWaterMoves.douse_1, TierOneWaterMoves.icy_shard_1]
    set_total_stats
  end

  def set_total_stats
    @tot_hp = @hp
    @tot_atk = @atk
    @tot_def = @def
    @tot_eng = @eng
    @tot_res = @res
    @tot_spd = @spd
  end

end
