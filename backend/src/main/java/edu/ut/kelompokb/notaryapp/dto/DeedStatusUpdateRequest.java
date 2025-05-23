package edu.ut.kelompokb.notaryapp.dto;

import edu.ut.kelompokb.notaryapp.etc.DeedStatus;

public record DeedStatusUpdateRequest(DeedStatus status, String note) {

}
